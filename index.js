const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github').Strategy

const keys = require('./config/keys')

const app = express()
const PORT = process.env.PORT || 5000

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

// start google signin
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] // what we need
  }
))

// use code in url
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' })
)

app.get('/auth/github', passport.authenticate('github'))

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' })
)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
