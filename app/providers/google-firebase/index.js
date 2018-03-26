/**
 * @name Google firebase
 * @desc initialize
 * */

var admin = require('firebase-admin');
var path = require('path');
var config = require('config');

module.exports = function () {

    var serviceAccount = require(path.join(__dirname, '../../../', config.firebase.storagePath));
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: config.firebase.url
    });
    return admin;

}
