// const express = require('express')
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World from express!')
// });

// app.listen(8000, () => {
//   console.log('App listening on port 8000!')
// });

// var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();
// var db = require('./db.js');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));

//Node index

var express = require('express');
var app = express();
var db = require('./db.js');

var UserController = require('./controllers/UserController');

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

// Prefix the routes
app.use('/', index);
app.use('/users', UserController);

module.exports = app; //because it isnt ES6, have to export this way. common.js,