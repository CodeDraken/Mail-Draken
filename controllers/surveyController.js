const _ = require('lodash')
const Path = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')

const { Survey } = require('../models')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const surveyController = {
  webhooks: {
    sendGrid (req, res) {
      const p = new Path('/api/surveys/:surveyId/:choice')

      // get clicked events
      let events = req.body
        .filter(({ url, event }) => url && event === 'click')
        .map(({ url, email }) => {
          const match = p.test(new URL(url).pathname)

          return match
            ? { email, surveyId: match.surveyId, choice: match.choice }
            : null
        })
        .filter(result => result !== null)

      // remove any duplicate votes by user for same survey
      events = _.uniqBy(events, 'email', 'surveyId')

      // findAndUpdate data
      events.forEach(({ email, surveyId, choice }) => {
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false }
          }
        }, {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        })
        .exec()
      })

      console.log('events', events)

      // send whatever back to sendgrid
      res.send({})
    }
  },

  feedback (req, res) {
    res.send('Thanks for the feedback!')
  },

  async getSurveys (req, res) {
    try {
      const surveys = await Survey
        .find({ _owner: req.user.id })
        .select({ recipients: false })

      res.send(surveys)
    } catch (err) {
      res.status(400).send(err)
    }
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
