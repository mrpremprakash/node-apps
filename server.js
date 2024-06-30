const express = require('express');
const userController = require('./controller/userController');

const app = express()
const port = 3000

app.use('/api/users', userController);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})