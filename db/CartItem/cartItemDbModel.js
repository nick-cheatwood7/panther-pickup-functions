
const mongoose = require('mongoose')

const CartItemSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false
  },
    cartId: {
      type: String,
      required: false
  },
    name: {
      type: String,
      required: false
  },
  cost: {
    type: Number,
    required: false
  }
}, { collection: 'CartItems'})

module.exports = cartItemDbModel = mongoose.model('CartItems', CartItemSchema)