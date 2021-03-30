
const menuItemDbModel = require('../db/MenuItem/menuItemDbModel.js')
const Db = require('../db/db')

const db = new Db()

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

exports.getMenuItemsByMenuId = async (req, res) => {

  console.log('Getting menu items by menu Id...')

  const queryParams = { menuId: req.params.menuId }

  let menuItemsDbFindResponse = []

  try {
    menuItemsDbFindResponse = await db.find(queryParams, 'MenuItem')
    res.status(200).json(menuItemsDbFindResponse)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }

}