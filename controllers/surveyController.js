const { Survey } = require('../models')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const surveyController = {
  // create survey & send
  async newSurvey (req, res) {
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

      const mailer = new Mailer(survey, surveyTemplate(survey))
      mailer.send()
    } catch (err) {
      res.status(400).send()
    }
  }
}

module.exports = surveyController
