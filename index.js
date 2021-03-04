
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
  getAllMenus,
  getmenuById
} = require('./handlers/menu.js')

// GET, POST, DELETE, UPDATE

// setup User routes
app.get('/users', getAllUsers)
app.get('/user/:userId', getUserById)
app.get('/users/test', testDBProps)

// TODO: Setup Menu routes
app.get('/menus', getAllMenus)
app.get('/menu/:menuId', getmenuById)

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