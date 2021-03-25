
const cartItemDbModel = require('../db/cartItem/cartItemDbModel.js')

exports.getCartItemByCartId = (req, res) => {

  console.log('Finding cartitem by cart id...')

  let cartItemData = {}

  try {

    const queryParams = {cartId: req.params.cartId}

    const cartItem = cartItemDbModel

    cartItem.find(queryParams, (err, cartItems) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err })
      } else {
        res.status(200).json(cartItems)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getCartItemByUserId = (req, res) => {

  console.log('Finding cartitem by user id...')

  let cartItemData = {}

  try {

    const queryParams = {userId: req.params.userId}

    const cartItem = cartItemDbModel

    cartItem.find(queryParams, (err, cartItems) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err })
      } else {
        res.status(200).json(cartItems)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.createCartItem = (req, res) => {

  console.log('Adding cart item to DB...')

  // validate cart item data
  const cartItemData = {
    userId: req.body.userId,
    menuItemId: req.body.menuItemId,
    name: req.body.name,
    imageUrl: req.body.imageUrl
  }

  console.log(cartItemData)

  try {
    const cartItem = cartItemDbModel

    const doc = new cartItem()

    doc.save()

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }

}

exports.removeCartItem = (req, res) => {

}