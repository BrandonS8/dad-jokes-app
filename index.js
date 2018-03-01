// require all our dependencies
const express = require('express')
const hbs = require('hbs')
const Joke = require('./models/Joke')
// create and setup express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')

// define a route
app.get('/', (req, res) => {
  Joke.find({}).then(jokes => {
    res.render('index', { jokes })
  })
})

// start the server
app.listen(3000, () => console.log('running'))
