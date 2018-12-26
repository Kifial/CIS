const mongodb = require('mongodb').MongoClient
const { exec } = require('child_process')

exec(`mongorestore --db CIS-my --drop db/my/CIS-my`, (err, stdout, stderr) => {
  console.log("<+++++ Successfully restored my database +++++>")
})