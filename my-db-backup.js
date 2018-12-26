const mongodb = require('mongodb').MongoClient
const { exec } = require('child_process')

mongodb.connect('mongodb://localhost:27017/CIS', async (err, db) => {
  exec(`mongodump --db CIS-my --out db/my`, (err, stdout, stderr) => {
    console.log("<+++++ Successfully backed up my database +++++>")
  })
})