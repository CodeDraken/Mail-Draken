const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github').Strategy

const keys = require('../config/keys')

// auth with google
passport.use(new GoogleStrategy({
  ...keys.google,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken, profile)
}))

// auth with GitHub
passport.use(new GithubStrategy({
  ...keys.github,
  callbackURL: '/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile)
}))
