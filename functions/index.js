
// import express and create a new express app

const http = require('http')
const express = require('express')
const app = express()
const router = express.Router()

// init port
const PORT = 5005

// import handlers
const {
  getAllUsers,
  testDBProps
} = require('./handlers/users.js')

// setup routes
app.get('/users', getAllUsers)
app.get('/users/test', testDBProps)

// export all functions for app

// init listener
const createServer = () => {
  app.listen(PORT, () => console.log('Server Listening on port:' + PORT))
  return http.createServer(app)
}

const main = () => {
  createServer()
}

main()