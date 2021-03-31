
// import express and create a new express app
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const router = express.Router()
const Db = require('./db/db.js')

var corsOptions = {
  origin: 'https://localhost:5005'
}

app.use(cors(corsOptions))

// Parse requests of type application/json
app.use(bodyParser.json())

// Parse requests of type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// init port
const PORT = 5005

// import handlers
const {
  getAllUsers,
  getUserById,
  testDBProps
} = require('./routes/user.routes.js')

const {
  getCartItemByUserId,
  addCartItem
} = require('./routes/cartItem.routes.js')

const {
  getAllMenuItems,
  getMenuItemById,
  getMenuItemsByMenuId
} = require('./routes/menuItem.routes.js')

// GET, POST, DELETE, UPDATE

// setup User routes
app.get('/users', getAllUsers)
app.get('/user/:userId', getUserById)
app.get('/users/test', testDBProps)

// CartItem routes
app.get('/user/:userId/cartItems', getCartItemByUserId)
app.post('/cartItem/add', addCartItem)

// MenuItem routes
app.get('/menuItem/:id', getMenuItemById)
app.get('/menuItems', getAllMenuItems)
app.get('/menu/:menuId/menuItems/', getMenuItemsByMenuId)

// init listener
const createServer = () => {
  app.listen(PORT, () => console.log('Server Listening on port:' + PORT))
  return http.createServer(app)
}

const main = () => {
  // Connect our databse
  const db = new Db().connect()
  createServer()
}

main()