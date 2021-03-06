const requireLogin = require('../middleware/requireLogin')
const billingController = require('../controllers/billingController')

module.exports = app => {
  // on submitting the stripe payment form
  app.post('/api/stripe', requireLogin, billingController.post)
}
