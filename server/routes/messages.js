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
            message: 'New message successfully created', messages
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

// Update - no?

// Delete a message

module.exports = router;