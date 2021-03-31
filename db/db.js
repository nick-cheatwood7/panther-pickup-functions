
const MongoClient = require('mongodb').MongoClient
const dbConfig = require('../config/db.config')

let instance = null
class Db {

  client = new MongoClient(dbConfig.dbConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  constructor() {
    if (!instance) instance = this
    return instance
  }

  find = async (query, collectionName) => {
    try {
      const collection = this.db.collection(collectionName)
      const findResponse = await collection.find(query).toArray()
      return findResponse
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  findOne = async (query, collectionName) => {
    try {
      const collection = this.db.collection(collectionName)
      const findResponse = await collection.findOne(query)
      return findResponse
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  findOneAndUpdate = async (query, collectionName, updateProps) => {
    try {
      const collection = this.db.collection(collectionName)
      const updateResponse = await collection.findOneAndUpdate(
        query,
        { $set: updateProps },
        { upsert: true, returnOriginal: false }
      )
      return updateResponse
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  insertOne = async (data, collectionName) => {
    try {
      const collection = this.db.collection(collectionName)
      const saveResponse = await collection.insertOne(data)
      return saveResponse.ops[0]
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  insertMany = async (data, collectionName) => {
    try {
      const collection = this.db.collection(collectionName)
      const recordsProps = data.map((r) => r.record)
      const saveResponse = await collection.insertMany(recordsProps)
      return saveResponse
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  connect = async () => {
    try {
      // Connect to the DB
      this.client.connect()
      console.log("\x1b[32m%s\x1b[0m", 'MongoDB Connection Established...')
    } catch (err) {
      console.error("\x1b[31m\x1b[0m", err.message)
      this.close()
    }
  }

  close = async () => {
    try {
      // Close the DB connection
      this.client.close()
      console.log("\x1b[33m%s\x1b[0m", 'MongoDB Connection Closed.')
    } catch (err) {
      console.error("\x1b[31m\x1b[0m", err.message)
    }
  }

  get db() {
    return this.client.db(dbConfig.dbName)
  }
}

module.exports = Db;