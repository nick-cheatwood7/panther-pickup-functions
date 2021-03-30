
const { Schema, model } = require('mongoose')

const User = model(
  "User",
  new Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, {
    collection: "User"
  })
)

module.exports = User

