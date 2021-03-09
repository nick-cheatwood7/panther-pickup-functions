const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  userId: {
    type: String,
    required: true
  },
  countItems: {
    type: Int32,
    required: false
  }
}, { collection: 'Cart'})

module.exports = menuDbModel = mongoose.model('Cart', CartSchema)