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
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

// auth with google
passport.use(new GoogleStrategy({
  ...keys.google,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then(existingUser => {
      if (existingUser) {
        done(null, existingUser)
      } else {
        new User({ googleId: profile.id }).save()
          .then(user => done(null, user))
      }
    })
}))

// auth with GitHub
passport.use(new GithubStrategy({
  ...keys.github,
  callbackURL: '/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ githubId: profile.id })
    .then(existingUser => {
      if (existingUser) {
        done(null, existingUser)
      } else {
        new User({ githubId: profile.id }).save()
          .then(user => done(null, user))
      }
    })
}))
