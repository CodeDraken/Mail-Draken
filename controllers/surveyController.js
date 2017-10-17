const { Survey } = require('../models')

const surveyController = {
  // create survey & send
  async post (req, res) {
    try {
      const { title, subject, body, recipients } = req.body
      const survey = new Survey({
        title,
        body,
        subject,
        recipients: recipients.split(',').map(email => ({ email })),
        _user: req.user.id,
        dateSent: Date.now()
      })

      // TODO: send survey & save
    } catch (err) {
      res.status(400).send()
    }
  }
}

module.exports = surveyController
