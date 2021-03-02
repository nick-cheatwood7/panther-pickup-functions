
// import express and create a new express app

const http = require('http')
const express = require('express')
const app = express()
const router = express.Router()

const { connectDB } = require('./db/db.js')

// init port
const PORT = 5005

// import handlers
const {
  getAllUsers,
  getUserById,
  testDBProps
} = require('./handlers/users.js')
const {
  getAllEntrees,
  getEntreeById
} = require('./handlers/entree.js')

// setup User routes
app.get('/users', getAllUsers)
app.get('/user/:userId', getUserById)
app.get('/users/test', testDBProps)

// TODO: Setup Meal routes
app.get('/entrees', getAllEntrees)
app.get('/entree/:entreeId', getEntreeById)

// TODO: Setup Entree routes

// export all functions for app

// init listener
const createServer = () => {
  app.listen(PORT, () => console.log('Server Listening on port:' + PORT))
  return http.createServer(app)
}

const main = () => {
  connectDB() // connect to our database
  createServer()
}

main()