const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Describe a message
var MessageSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
});

module.exports = mongoose.model('Message', MessageSchema);