const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const socket = require('socket.io');

// TODO: This does not work. Must be a string?
// const mongoUser = process.env.MONGO_USER;
// const mongoPassword = process.env.MONGO_PASSWORD;
const mongoose = require('mongoose');
const mongodbUri ='mongodb://@ds151892.mlab.com:51892/prattle';

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
      user: 'admin',
      password: 'supersecret1'
    }
})

const conn = mongoose.connection;    
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', () =>{
 console.log('Connected to database!')                       
});

const index = require('./routes/index');
const auth = require('./controllers/AuthController');
const users = require('./controllers/UserController');
const messages = require('./controllers/MessageController');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    next();
});

// Add express to use the routes??
// const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);
app.use('/messages', messages);

app.use(function(error, req, res, next) {
    res.status(error.status || 500).send({'error': 'Oups something went wrong!'})
});

var port = 3003;
const server = app.listen(port, function() {
    console.log('Express is now listening to port: ' + port);
});

var io = socket(server);

io.on('connection', function(io) {
    console.log('A user is connected! YAY');
});

// app.listen(3333);
// console.log('Magic is happening over at 3333');

module.exports = app;