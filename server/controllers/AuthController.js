const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

// register
router.post('/register', function(req, res) {
  User.create(
    {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    avatarUrl: req.body.avatarUrl
    },
  
    function(error, user) {
      if(error) {
        return 
        res.status(500)
        .send('An error occured while trying to register a user' + error)
      } else {
        // create a JWT token, _id is default in mongo. config.secret = private key
        var token = jwt.sign({ id: user._id}, config.secret, {
            expiresIn: 86400 //valid 24h
        });
        res.status(200)
        .send({ authecticated: true, token: token, user:user });
        }
  });
});

// login

// me
// apply tokenverify middleware, run and execute before the callback -> access to req.userid

module.exports = router;