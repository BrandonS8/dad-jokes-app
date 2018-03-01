// require all our dependencies
const express = require('express')

// create and setup express app
const app = express()

// define a route
app.get('/', (req, res) => {
  res.send('hello world')
})

// start the server
app.listen(3000, () => console.log('running'))
