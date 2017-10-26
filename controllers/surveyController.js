const _ = require('lodash')
const Path = require('path-parser')
const { URL } = require('url')

const { Survey } = require('../models')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const surveyController = {
  webhooks: {
    sendGrid (req, res) {
      const p = new Path('/api/surveys/:surveyId/:choice')

      // get clicked events
      let clickedMail = req.body
        .filter(({ url, event }) => url && event === 'click')
        .map(({ url, email }) => {
          const match = p.test(new URL(url).pathname)

          return match
            ? { email, surveyId: match.surveyId, choice: match.choice }
            : null
        })
        .filter(result => result !== null)

      // remove any duplicate votes by user for same survey
      clickedMail = _.uniqBy(clickedMail, 'email', 'surveyId')

      console.log('click events', clickedMail)

      res.send({})
    }
  },

  feedback (req, res) {
    res.send('Thanks for the feedback!')
  },

  // create survey & send
  async newSurvey (req, res) {
    try {
      const { title, subject, body, recipients } = req.body
      const survey = new Survey({
        title,
        body,
        subject,
        recipients: recipients
          .split(',')
          .map(email => email.trim())
          .map(email => ({ email })),
        _owner: req.user.id,
        dateSent: Date.now()
      })

      // send mail & update database
      const mailer = new Mailer(survey, surveyTemplate(survey))
      await mailer.send()
      await survey.save()

      req.user.credits -= 1
      const user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  }

}

module.exports = surveyController
