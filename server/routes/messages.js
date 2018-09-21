const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

// Create a message
router.post('/', function(req, res) {
    const newMessage = new Message();
    newMessage.text = req.body.text;
    debugger;
    newMessage.save(function(error, messages) {
        debugger;
        if (error) {
            debugger;
            res.status(500).send({
                message: error
            });
        }
        res.status(200).send({
            message: 'New message successfully created: ' + messages.text
        });
    })
});

// Read - get all messages
router.get('/', function(req, res) {
    Message.find({}, function(error, messages) {
        if(error) {
            return res.status(500).send('An error occured. Could not get the messages...');
        } else {
            res.status(200).send(messages);
        }
    })
});

// Read - get messages by id
router.get('/:id', function(req, res) {
    Message.findById(req.params.id)
    .exec()
    .then(message => {
        if(!message) {
            res.status(500).json({
                message: 'No message found...'
            });
        }
        res.status(200).json(message);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// Update - no?

// Delete a message

module.exports = router;