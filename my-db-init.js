const mongodb = require('mongodb').MongoClient

mongodb.connect('mongodb://localhost:27017/CIS-my', async (err, db) => {
  await db.collection('tweets').insertMany([
    {
      text: 'sample 1'
    },
    {
      text: 'sample 2'
    },
    {
      text: 'sample 3'
    },
    {
      text: 'sample 4'
    }
  ])

  console.log('<===== Collection Tweets successfully initialized =====>')
})