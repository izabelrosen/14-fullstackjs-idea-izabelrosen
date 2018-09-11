const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

UserSchema.pre('save', function(next) {
    var user = this;

    if(!user) return next(error)
    console.log(user)
    var roundsOfSalt = 5;
    return next();
})

module.exports = mongoose.model('User', UserSchema);