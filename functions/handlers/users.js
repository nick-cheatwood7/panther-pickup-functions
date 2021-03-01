
const { connectDB, closeDB } = require('../db/db.js')
const config = ('../util/config.js')
const mongoose = require('mongoose')

const UserDbModel = require('../db/User/UserDbModel.js')

exports.getAllUsers = (req, res) => {

  console.log('Getting user list...')

  try {
    connectDB()

    const queryParams = {}

    const user = UserDbModel

    console.log(user)

    user.find(queryParams, (err, users) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(users)
      }
    })
  } catch(err) {
    closeDB()
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.testDBProps = (req, res) => {
  console.log('Testing DB props')
  res.status(200).json({ message: 'Successfully connected to User handler...'})
}