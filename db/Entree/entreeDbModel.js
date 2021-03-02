
const mongoose = require('mongoose')

const EntreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  tags: {
    type: [String],
    required: true
  },
}, { collection: 'Entree'})

module.exports = entreeDbModel = mongoose.model('Entree', EntreeSchema)