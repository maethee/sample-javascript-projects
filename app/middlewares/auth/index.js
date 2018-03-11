/**
 * Auth
 *
 * @desc middleware for each route if you want.
 *
 * */

var passport = require('passport');
var NormallyStrategy = require('custom-authentication').NormallyStrategy;

passport.use('custom-strategy', new NormallyStrategy(
    function(req, callback) {
        console.log('NormallyStrategy')
        // Do your custom user finding logic here, or set to false based on req object
        callback(null, { name: 'bee'});
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
