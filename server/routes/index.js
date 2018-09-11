var express = require('express');
var router = express.Router();

// Home route
router.get('/', function(req, res) {
    res.status(200).send({'status': 'all good!'});
});

module.exports = router;