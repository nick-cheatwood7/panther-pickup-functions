const mongoose = require('mongoose')

const OrderItemSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  menuItemID: {
    type: String,
    required: true
  }
}, { collection: 'OrderItem'})

module.exports = OrderItemDbModel = mongoose.model('OrderItem', OrderItemSchema)