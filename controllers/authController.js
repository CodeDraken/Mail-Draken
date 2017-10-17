const authController = {
  googleCallback (req, res) {
    res.redirect('/surveys')
  },

  githubCallback (req, res) {
    res.redirect('/surveys')
  },

  currentUser (req, res) {
    res.send(req.user)
  },

  logout (req, res) {
    // kills the cookie
    req.logout()
    res.redirect('/')
  }
}

module.exports = authController
