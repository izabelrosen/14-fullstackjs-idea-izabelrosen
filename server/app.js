const express = require('express');
const bodyParser = require('body-parser');

// TODO: This does not work. Must be a string? 
// const mongoUser = process.env.MONGO_USER;
// const mongoPassword = process.env.MONGO_PASSWORD;
const mongoose = require('mongoose');
var mongodbUri ='mongodb://@ds151892.mlab.com:51892/prattle';

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
      user: 'admin',
      password: 'supersecret1'
    }
})

var conn = mongoose.connection;    
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', () =>{
 console.log('Connected to database!')                       
});

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);

app.use(function(error, req, res, next) {
    res.status(error.status || 500).send({'error': 'Oups something went wrong!'})
});

app.listen(3000);
console.log('Magic is happening over at 3000');

module.exports = app;