const passport = require('passport')

module.exports = (app) => {
  // start google signin
  app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] // what we need from google
  }))

  // use code in url
  app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' })
  )

  app.get('/auth/github', passport.authenticate('github'))

  app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' })
  )
}
