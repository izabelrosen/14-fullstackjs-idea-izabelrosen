const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, maxlength: [100, 'Wooh, slow down buddy - too long name.']},
    username: { type: String, maxlength: [50, 'Uhmm try a shorter username!']},
    email: String,
    password: { type: String, minlength: [4, 'Password must contain at least 8 characters']},
    avatar: { type: String, default: ""},
    chats: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'

    }]
});

UserSchema.pre('save', function(next) {
    var user = this;
    var roundsOfSalt = 5;
})

module.exports = mongoose.model('User', UserSchema);