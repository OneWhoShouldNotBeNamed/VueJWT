const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
var port = process.env.PORT || 5000
const mongoose = require('mongoose');

app.use(bodyParser.json())

app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended:false
        })
)
const mongoURI='mongodb://localhost:27017/mevnloginreg'

mongoose.connect(
    mongoURI,
    {useNewUrlParser:true}
)
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err))

var Users = require('./routes/user.routes')

app.use ('/user',Users)

app.listen(port ,()=> console.log(`Server is Running on Port : ${port}`)) 