const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const port = 8000
const router = require('./routers/router')
require('./dbconfig')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/public',express.static('public'))
app.use(router)

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})