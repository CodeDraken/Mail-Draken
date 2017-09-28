const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const keys = require('./config/keys')

require('./models/User')
require('./services/passport') // passport config

mongoose.connect(keys.mongoURI)

const app = express()

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

require('./routes/authRoutes')(app) // authentication routes

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
