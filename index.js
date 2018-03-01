// require all our dependencies
const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const Joke = require('./models/Joke')
const jokesController = require('./controllers/joke')
// create and setup express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')

// configure express to use body parser
app.use(parser.urlencoded({ extended: true }))
// app.use(parser.json())

// define a route
app.get('/', (req, res) => {
  Joke.find({}).then(jokes => {
    res.render('index', { jokes })
  })
})

app.use('/jokes', jokesController)
// start the server
app.listen(3000, () => console.log('running'))
