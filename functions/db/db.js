
const mongoose = require('mongoose')
const config = require('../util/config.js')

exports.connectDB = async () => {
  try {
    // Connect to DB
    mongoose.connect(config.apiUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("\x1b[32m%s\x1b[0m", 'MongoDB Connection Established...')
  } catch (err) {
    console.error("\x1b[31m\x1b[0m", err.message)
    this.closeDB()
  }
}

exports.closeDB = async () => {
  try {
    // Close DB connection
    mongoose.connection.close()
    console.log("\x1b[33m%s\x1b[0m", 'MongoDB Connection Closed.')
  } catch (err) {
    console.error("\x1b[31m\x1b[0m", err.message)
  }
}
