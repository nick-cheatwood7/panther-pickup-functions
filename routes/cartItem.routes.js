
const CartItem = require('../db/cartItem/cartItemDbModel.js')
const cartItemDbModel = require('../db/cartItem/cartItemDbModel.js')
const Db = require('../db/db')
const db = new Db()

exports.getCartItemByUserId = async (req, res) => {

  console.log('Finding cart items by user id...')

  const queryParams = { userId: req.params.userId }

  let cartItemsFindResponse = []

  try {
    cartItemsFindResponse = await db.find(queryParams, 'CartItems')
    res.status(200).json(cartItemsFindResponse)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }

}

exports.addCartItem = async (req, res) => {

  console.log('Adding cart item to DB...')

  // validate cart item data
  const cartItem = new CartItem({
    userId: req.body.userId,
    menuItemId: req.body.menuItemId,
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    cost: req.body.cost
  })

  console.log(cartItem)

  let cartItemsAddResponse = []

  try {
    cartItemsAddResponse = await db.insertOne(cartItem, 'CartItems')
    res.status(200).json(cartItemsAddResponse)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.removeCartItem = (req, res) => {

}