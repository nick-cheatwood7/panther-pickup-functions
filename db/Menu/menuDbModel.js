const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, { collection: 'Menu'})

module.exports = menuDbModel = mongoose.model('Menu', MenuSchema)