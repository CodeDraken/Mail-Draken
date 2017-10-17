const surveyController = require('../controllers/surveyController')
const requireLogin = require('../middleware/requireLogin')

module.exports = app => {
  app.post('/api/surveys', requireLogin, surveyController.post)
}
