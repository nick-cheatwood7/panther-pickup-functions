
const { Schema, model } = require('mongoose')

const Cart = model(
  "Cart",
  new Schema({
    userId: String,
    countItems: Number,
    totalCost: Number
  }, {
    collection: "Cart"
  })
)

module.exports = Cart