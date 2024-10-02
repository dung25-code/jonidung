const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())



app.get('/', function (req, res) {
  res.send('Hello Đaị Học Đông Á')
})

app.listen(process.env.PORT || 3000)