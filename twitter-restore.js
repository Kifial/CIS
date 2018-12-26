const { exec } = require('child_process')

exec(`mongorestore --db CIS --drop db/twitter`, async (err, stdout, stderr) => {
  console.log("<===== Successfully restored twitter database =====>")
})