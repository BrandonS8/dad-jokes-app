// require all our dependencies
const express = require('express')
const hbs = require('hbs')
// create and setup express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')

// define a route
app.get('/', (req, res) => {
  // render the index view
  res.render('index')
})

// start the server
app.listen(3000, () => console.log('running'))
