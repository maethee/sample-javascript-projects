

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    merchantId: {type: String, required: true},
    orderRef: {type: String, required: true},
    orderRefBank: {type: String, required: true},
    refNo: {type: String},
    recurring: {type: String},
    recurringStatus: {type: Boolean, default: false},
    recurringActive: {type: Boolean, default: false},
    recurringActiveDate: {type: Date, default: null},
});

userSchema.pre('save', function (next) {
    var now = new Date();
    if (!this.created) {
        this.created = now;
    }
    next();
});

module.exports = mongoose.model('Users', userSchema);
