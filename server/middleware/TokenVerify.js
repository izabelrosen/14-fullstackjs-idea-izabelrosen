const jwt = require('jsonwebtoken');
const config = require('../config');

function tokenVerify (req, res, next) {
  var token = req.headers['x-access-token'];

  if(!token) {
    return res.status(401).send({
      auth: false,
      message: 'Unauthorized. No token provided.'
    });
  }

  jwt.verify(token, config.secret, function(error, decoded) {
    if(error) {
      return res.status(500).send({
        auth: false,
        message: 'An error occured while trying to authenticate token.'
      });
    }
    
    req.userId = decodedToken.id;
    next();
  })
}

module.exports = tokenVerify;