// Import db connection
const mongoose = require("../db/connection")

// create a new schema
const JokeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  punchline: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

// giving mongoose the schema to build the model
const Joke = mongoose.model("Joke", JokeSchema)

// exporting the 'Joke' model
module.exports = Joke
