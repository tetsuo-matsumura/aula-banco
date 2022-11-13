const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false
  },
  displayName: {
    type: String,
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User