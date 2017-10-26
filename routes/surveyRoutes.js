const surveyController = require('../controllers/surveyController')
const requireLogin = require('../middleware/requireLogin')
const requireCredits = require('../middleware/requireCredits')

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', surveyController.feedback)

  app.post('/api/surveys/webhooks/sendgrid', surveyController.webhooks.sendGrid)

  app.post('/api/surveys', requireLogin, requireCredits(1), surveyController.newSurvey)

  app.get('/api/surveys', requireLogin, surveyController.getSurveys)
}
