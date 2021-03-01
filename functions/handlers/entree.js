
const { connectDB, closeDB } = require('../db/db.js')
const config = ('../util/config.js')
const mongoose = require('mongoose')

const entreeDbModel = require('../db/entree/entreeDbModel.js')

exports.getAllEntrees = (req, res) => {

  console.log("\x1b[36m%s\x1b[0m", 'Getting Entree list...')

  try {
    //connectDB()

    const queryParams = {}

    const entree = entreeDbModel

    entree.find(queryParams, (err, entrees) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(entrees)
      }
    })
  } catch(err) {
    // closeDB()
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.getEntreeById = (req, res) => {

  console.log('Finding entree by Id...')

  let entreeData = {}

  try {
    // connectDB()

    const queryParams = {_id: req.params.entreeId}

    const entree = entreeDbModel

    entree.find(queryParams, (err, entrees) => {
      if (err) {
        console.error(err)
        res.status(400).json({ error: err})
      } else {
        res.status(200).json(entrees)
      }
    })
  } catch(err) {
    // closeDB()
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error'})
  }

}

exports.testDBProps = (req, res) => {
  console.log('Testing DB props')
  res.status(200).json({ message: 'Successfully connected to entree handler...'})
}