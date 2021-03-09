const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  countItems: {
    type: Number,
    required: false
  }
}, { collection: 'Order'})

module.exports = menuDbModel = mongoose.model('Order', OrderSchema)