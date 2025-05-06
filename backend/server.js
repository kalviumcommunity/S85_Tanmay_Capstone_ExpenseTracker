require('dotenv').config()

const express = require('express')

const db = require('./db')

const userRoute = require('./routes/userapi')

const app = express()

app.use('/api/user',userRoute)

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Hello World from server")
})

app.listen(port,()=>{
    console.log(`Server is running on : http://localhost:${port}`)
})