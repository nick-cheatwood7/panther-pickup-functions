
const menuDbModel = require('../db/menu/menuDbModel.js')

exports.getAllMenus = (req, res) => {

  console.log('Getting menu list...')

  try {

    const queryParams = {}

    const menu = menuDbModel

    menu.find(queryParams, (err, menus) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(menus)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getmenuById = (req, res) => {

  console.log('Finding menu by Id...')

  let menuData = {}

  try {

    const queryParams = {_id: req.params.menuId}

    const menu = menuDbModel

    menu.find(queryParams, (err, menus) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(menus)
      }
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getMenusByYear = (req, res) => {

  console.log('Finding menu by year...')

  let menuData = {}

  try {
    const queryParams = { year: req.params.year }
    const menu = menuDbModel

    menu.find(queryParams, (err, menus) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(menus)
      }
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getMenuByYearAndTerm = (req, res) => {

  console.log('Finding menu by year and term...')

  console.log(req.params)

  let menuData = {}

  try {
    const queryParams = { year: req.body.year, term: req.body.term }
    const menu = menuDbModel

    menu.find(queryParams, (err, menus) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err })
      } else {
        res.status(200).json(menus)
      }
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.testDBProps = (req, res) => {
  console.log('Testing DB props')
  res.status(200).json({ message: 'Successfully connected to menu handler...'})
}