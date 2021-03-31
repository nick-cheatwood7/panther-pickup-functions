
const { Schema, model } = require('mongoose')

const CartItem = model(
  "CartItems",
  new Schema({
    userId: String,
    cartId: String,
    menuItemId: String,
    name: String,
    cost: Number,
    imageUrl: String
  }, {
    collection: "CartItems"
  })
)

module.exports = CartItem