const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Create User
router.post('/', function(req, res) {
    const newUser = new User();
    newUser.name = req.body.name;

    newUser.save(function(error) {
        if (error) {
            res.status(500).send({
                message: error
            });
        }

        res.status(200).send({
            message: 'User successfully created'
        });
    })
});

// Read, get users
router.get('/', function(req, res) {
    
});

// Read - get specific user
router.get('/:id', function(req, res) {

});

// Update user
router.put('/:id', function(req, res) {
    
});

// Delete user
router.delete('/:id', function(req, res) {
    
});

module.exports = router;