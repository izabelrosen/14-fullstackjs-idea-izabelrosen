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
    User.find({}, function(error, users) {
        if(error) {
            return res.status(500).send("An error occured, could not get users from db.");
        } else {
            res.status(200).send(users);
        }
    })
});

// Read - get specific user
router.get('/:id', function(req, res) {
    User.findById(req.params.id)
    .exec()
    .then(user => {
        if(!user) {
            res.status(500).json({
                message: "No user found"
            });
        }
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// Update user
router.put('/:id', function(req, res) {
    
});

// Delete user
router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(error, user) {
        if(error) {
            return res.status(500).send("An error occured while trying to delete a user from db...");
        } else {
            res.status(200).send("User " + user.name + " was successfully deleted!");
        }
    })
});

module.exports = router;