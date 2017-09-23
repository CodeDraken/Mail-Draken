const express = require('express')

require('./services/passport') // passport config

const app = express()
require('./routes/authRoutes')(app) // authentication routes

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
