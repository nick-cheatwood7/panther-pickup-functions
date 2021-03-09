
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
  getmenuById,
  getMenusByYear,
  getMenuByYearAndTerm
} = require('./handlers/menu.js')

const {
  getAllMenuItems,
  getMenuItemById,
  getMenuItemsByMenuId
} = require('./handlers/menuItem.js')

// GET, POST, DELETE, UPDATE

// setup User routes
app.get('/users', getAllUsers)
app.get('/user/:userId', getUserById)
app.get('/users/test', testDBProps)

// Menu routes
app.get('/menus', getAllMenus)
app.get('/menu/:menuId', getmenuById)
app.get('/menus/:year', getMenusByYear)
// TODO: Add query for term and year
app.get('/menus/query/:params', getMenuByYearAndTerm)

// MenuItem routes
app.get('/menuItems/:id', getMenuItemById)
app.get('/menuItems', getAllMenuItems)
app.get('/menuItems/:menuId', getMenuItemsByMenuId)

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