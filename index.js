const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()
const PORT = process.env.PORT || 5000

// auth with google
passport.use(new GoogleStrategy())

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
