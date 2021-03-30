
const cartDbModel = require('../db/cart/cartDbModel.js')

exports.getCartByUserId = (req, res) => {

  console.log('Finding cart by user Id...')

  let cartData = {}

  try {

    const queryParams = {userId: req.params.userId}

    const cart = cartDbModel

    cart.find(queryParams, (err, carts) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err })
      } else {
        res.status(200).json(carts)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getCartById = (req, res) => {

  console.log('Finding cart by Id...')

  let cartData = {}

  try {

    const queryParams = {_id: req.params.userId}

    const cart = cartDbModel

    cart.find(queryParams, (err, carts) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err })
      } else {
        res.status(200).json(carts)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}