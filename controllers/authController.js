const authController = {}

authController.googleCallback = (req, res) => {
  res.redirect('/surveys')
}

authController.githubCallback = (req, res) => {
  res.redirect('/surveys')
}

authController.currentUser = (req, res) => {
  res.send(req.user)
}

authController.logout = (req, res) => {
  // kills the cookie
  req.logout()
  res.redirect('/')
}

module.exports = authController
