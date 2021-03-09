const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  year: {
    type: Int32,
    required: false
  },
  term: {
    type: String,
    required: false
  }
}, { collection: 'Menu'})

module.exports = menuDbModel = mongoose.model('Menu', MenuSchema)