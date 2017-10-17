const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)

const billingController = {
  async post (req, res) {
    // bill the credit card, returns payment info object
    try {
      const charge = await stripe.charges.create({
        amount: 500, // cents
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id
      })

      req.user.credits += 5

      const user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.satus(400).send()
    }
  }
}

module.exports = billingController
