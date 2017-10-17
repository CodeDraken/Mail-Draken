const surveyController = require('../controllers/surveyController')
const requireLogin = require('../middleware/requireLogin')
const requireCredits = require('../middleware/requireCredits')

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits(1), surveyController.post)
}
