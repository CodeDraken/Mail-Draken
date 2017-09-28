const mongoose = require('mongoose')

// we need to tell Mongoose what our records look like
const { Schema } = mongoose

// this is what the records in the user model should look like
const userSchema = new Schema({
  email: String,
  googleId: String,
  githubId: String
})

// creates a collection called users and uses the schema
mongoose.model('users', userSchema)
