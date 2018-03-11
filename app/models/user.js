

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    birth: {type: Date, default: true},
    gender: {type: String, default: true},
    address: {type: String, default: true},
    mobile: {type: Boolean, default: true, min: 9, max: 10},
});

userSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

userSchema.pre('save', function (next) {
    var now = new Date();
    if (!this.created) {
        this.created = now;
    }
    next();
});

module.exports = mongoose.model('Users', userSchema);
