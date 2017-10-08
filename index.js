const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const keys = require('./config/keys')

require('./models/User')
// passport config
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())

// This middleware will attach the property session to req
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days (MS)
    keys: [keys.cookieKey]
  })
)

// initialize passport
app.use(passport.initialize())

// persistent login sessions
app.use(passport.session())

// authentication routes
require('./routes/authRoutes')(app)

// billing routes
require('./routes/billingRoutes')(app)

// production only & happens after other routes
if (process.env.NODE_ENV === 'production') {
  // serve production assets ( main.js, main.css, etc )
  app.use(express.static('client/build'))

  // serve index.html if unrecognized route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
