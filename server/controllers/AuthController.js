const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const TokenVerify = require('../middleware/TokenVerify');

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
        return res.status(500)
        .send('An error occured while trying to register a user ' + error)
      } else {
        // create a JWT token, _id is default in mongo. config.secret = private key
        // jwt.sign takes a payload, an object with id, and secret key from config.js
        var token = jwt.sign({ id: user._id}, config.secret, {
            expiresIn: 86400 //valid 24h
        });

        res.status(200).send({ 
          authenticated: true, 
          token: token, 
          user: user 
          });
        }
    }
  );
});

// login
router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email}, function(error, user) {
    if(error) 
      return res.status(500)
      .send('An error occured while trying to log in');

    if(!user) 
      return res.status(404)
      .send('No registered user found with this email, try again!');

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if(!passwordIsValid) 
      return res.status(401)
      .send({ 
        authenticated: false,
        token: null
      });

    // if the passwords match -> signs a token
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400
    });

    res.status(200).send({
      authenticated: true,
      token: token
    });
  });
});

// me: get info about the auth user
// apply tokenverify middleware, run and execute before the callback -> access to req.userid
router.get('/me', TokenVerify, function(req, res) {
  User.findById(req.userId, { password: 0 }, function(error, user) {
    if (error) {
      return res
      .status(500)
      .send('An error occured while trying to find the user.');
    }
    if (!user) {
      return res.status(404)
      .send('User not found');
    }

    return res.status(200).send({ 
      authenticated: true, 
      user: user
    });
  });
});

module.exports = router;