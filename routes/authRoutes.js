const passport = require('passport')

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
    (req, res) => {
      res.redirect('/surveys')
    }
  )

  app.get('/auth/github', passport.authenticate('github'))

  app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/surveys')
    }
  )

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  app.get('/api/logout', (req, res) => {
    // kills the cookie
    req.logout()
    res.redirect('/')
  })
}
