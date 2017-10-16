const passport = require('passport')

const authController = require('../controllers/authController')

module.exports = app => {
  // start google signin
  app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] // what we need from google
  }))

  // use code in url
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    authController.googleCallback
  )

  app.get('/auth/github', passport.authenticate('github'))

  app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    authController.githubCallback
  )

  app.get('/api/current_user', authController.currentUser)

  app.get('/api/logout', authController.logout)
}
