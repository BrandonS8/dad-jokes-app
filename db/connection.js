// connect to mongo using mongoose
const mongoose = require('mongoose')

// connect to db /localhost/dbnamecanbechanged
mongoose.connect('mongodb://localhost/dad_jokes')

// tell mongoose what promise library to use, Promise is native js here
mongoose.Promise = Promise

// export this mongoose (mongoose with db connection)
module.exports = mongoose
