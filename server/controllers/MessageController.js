const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

// Create a message
router.post('/', function(req, res) {
    const newMessage = new Message();
    newMessage.text = req.body.text;
    newMessage.save(function(error, messages) {
        if (error) {
            res.status(500).send({
                message: error
            });
        }
        res.status(200).send({
            messages,
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
router.delete('/:id', function(req, res) {
    Message.findByIdAndRemove(req.params.id, function(error, message) {
        if(error) {
            return res.status(500).send('An error occured while trying to delete message: ' + message.text)
        } else {
            res.status(200).send('Message ' + message.text + ' was successfully deleted.');
        }
    })
});

module.exports = router;