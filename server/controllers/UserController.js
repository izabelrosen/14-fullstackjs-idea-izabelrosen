const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Create User
// I create a user in auth controller so I dont need this.
// router.post('/', function(req, res) {
//     const newUser = new User();
//     newUser.name = req.body.name;
//     newUser.username = req.body.username;
//     newUser.email = req.body.email;
//     newUser.password = req.body.password;

//     newUser.save(function(error) {
//         if (error) {
//             res.status(500).send({
//                 message: error
//             });
//         }

//         res.status(200).send({
//             user: newUser,
//             message: 'User successfully created'
//         });
//     })
// });

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

// Update user and if it does not exist -> creates a new user
router.put('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(error, user) {
        if(error) {
            return res.status(500).send("An error occured while trying to update a user from db.");
        } else {
            res.status(200).send("User " + user.name + " was successfully updated");
        }
    })
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