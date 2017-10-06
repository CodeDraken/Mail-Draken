const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  // on submitting the stripe payment form
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // bill the credit card, returns payment info object
    const charge = await stripe.charges.create({
      amount: 500, // cents
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    })

    req.user.credits += 5

    const user = await req.user.save()

    res.send(user)
  })
}
