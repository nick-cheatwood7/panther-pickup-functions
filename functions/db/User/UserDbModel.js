
const { Schema, model } = require('mongoose')

const UserDbSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  privilegeSet: {
    type: [String],
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
  },
}, { collection: 'User' })

module.exports = userDbModel = model('User', UserDbSchema)

