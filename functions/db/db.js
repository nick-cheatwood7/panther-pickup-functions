
const mongoose = require('mongoose')
const config = require('../util/config.js')

exports.connectDB = async () => {
  try {
    // Connect to DB
    mongoose.connect(config.apiUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(err.message)
    // closeDB()
  }
}

exports.closeDB = async () => {
  try {
    // Close DB connection
    mongoose.connection.close()
  } catch (err) {
    console.error(err.message)
  }
}
