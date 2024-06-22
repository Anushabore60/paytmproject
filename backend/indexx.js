const express=require('express')
const rootrouter=require ('./routes/index')
const cors =require('cors')
const mongoose = require('./db')
const bodyParser = require('body-parser')
const port=(3000)
//const db=mongoose.connect('/Anusha:ch0SPMoYs6e0c8ys@cluster0.hmylylr.mongodb.net/')
const app=express()
app.use(cors())
app.use (bodyParser.json())

console.log("server running on port:"+`${port}`)


app.use ('/api/v1',rootrouter,)
app.listen(3000)


