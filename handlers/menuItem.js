
const menuItemDbModel = require('../db/MenuItem/menuItemDbModel.js')

exports.getAllMenuItems = (req, res) => {

  console.log('Getting all menu items...')

  try {

    const queryParams = {}

    const menu = menuItemDbModel

    menu.find(queryParams, (err, menuItems) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(menuItems)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getMenuItemById = (req, res) => {

  console.log('Getting menu item by Id...')

  try {

    const queryParams = { _id: req.params.id }

    const menu = menuItemDbModel

    menu.find(queryParams, (err, menuItems) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(menuItems)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getMenuItemsByMenuId = (req, res) => {

  console.log('Getting menu items by menu Id...')

  try {

    const queryParams = { menuId: req.params.menuId }

    const menu = menuItemDbModel

    menu.find(queryParams, (err, menuItems) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(menuItems)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}