
const mongoose = require('mongoose')

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  menuId: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  }
}, { collection: 'MenuItem'})

module.exports = entreeDbModel = mongoose.model('MenuItem', MenuItemSchema)