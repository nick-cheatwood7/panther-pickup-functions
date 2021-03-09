
const mongoose = require('mongoose')

const CartItemSchema = new mongoose.Schema({
    cartId: {
      type: String,
      required: true
    },
    menuItemId: {
      type: String,
      required: true
    }
}, { collection: 'CartItem'})

module.exports = entreeDbModel = mongoose.model('CartItem', CartItemSchema)