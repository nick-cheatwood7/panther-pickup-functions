
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