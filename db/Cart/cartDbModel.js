const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  countItems: {
    type: Number,
    required: false
  },
  totalCost: {
    type: Number,
    required: false
  }
}, { collection: 'Cart'})

module.exports = cartDbModel = mongoose.model('Cart', CartSchema)