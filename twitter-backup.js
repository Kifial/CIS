const mongodb = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const { exec } = require('child_process')

const idToChange = "553bbecae8f1e57878b72a1c"

mongodb.connect('mongodb://localhost:27017/CIS', async (err, db) => {
  await db.collection('tweets').update({
    _id: new ObjectID(idToChange)
  }, {
    $set: {
      text: 'Changed text'
    }
  })

  exec(`mongodump --db CIS --out db/twitter-changed`, (err, stdout, stderr) => {
    console.log("<+++++ Successfully backed up twitter database +++++>")
  })
})