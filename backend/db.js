require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/')

mongoose.connection.on('Connected',()=>{
    console.log('Connected to MongoDB')
})

mongoose.connection.on('err',(err)=>{
    console.log('Connection error: ',err)
})

module.exports = mongoose

