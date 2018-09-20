const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Describes a user
var UserSchema = new mongoose.Schema({
    name: {type: String, maxlength:[100, 'Uhm your name is too long, try again!']},
    username: {type: String, maxlength:[80, 'Try a shorter username!']},
    email: String,
    password: {type: String, minlength: [4, 'Password must contain at least 8 characters']},
    profile_picture: { type: String, default: "" },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

// Before saving a user in DB:
// next: continue when password is bcrypted
// If this === Schema
UserSchema.pre('save', function(next) {
    var user = this;
    var roundsOfSalt = 5;

    if(!user.isModified('password'))
    return next();

    // hash -> store in db
    bcrypt.genSalt(roundsOfSalt, function(error, salt) {
        if (error) return next(error);

        user.password = hash;
        next();
        // Next: continues if everything went well
    })

    // if(!user) return next(error)
    // console.log(user)
    // var roundsOfSalt = 5;
    // return next();
})

module.exports = mongoose.model('User', UserSchema);