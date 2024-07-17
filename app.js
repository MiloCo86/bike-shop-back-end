const express = require('express')
const app = express()
const cors = require('cors')

/// import controllers here:
const bikesController = require('./controllers/bikesController')


//Middleware
app.use(express.json())
app.use(cors())

app.use('/bikes', bikesController)


app.get('/',(req,res) =>{
    res.send('Welcome to bike inventory API')
})

app.get('*',(req,res)=>{
    res.status(404).send('Page not found')
})


module.exports = app