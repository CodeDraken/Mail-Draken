const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github').Strategy
const mongoose = require('mongoose')

const keys = require('../config/keys')
const User = mongoose.model('users')

// user to id token
passport.serializeUser((user, done) => {
  // user.id === mongo _id
  done(null, user.id)
})

// id token to user
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})

// auth with google
passport.use(new GoogleStrategy({
  ...keys.google,
  callbackURL: '/auth/google/callback',
  proxy: true
},
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id })

  if (existingUser) {
    // user exists
    return done(null, existingUser)
  }
    // create a new user
  const user = await new User({
    googleId: profile.id,
    email: profile.emails[0].value || null,
    githubId: null
  }).save()

  done(null, user)
}))

// auth with GitHub
passport.use(new GithubStrategy({
  ...keys.github,
  callbackURL: '/auth/github/callback',
  proxy: true
},
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ githubId: profile.id })

  if (existingUser) {
    return done(null, existingUser)
  }

  const user = await new User({
    githubId: profile.id,
    email: profile.email || null,
    googleId: null
  }).save()

  done(null, user)
}))
