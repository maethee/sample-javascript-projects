/**
 * Module dependencies.
 */
var  util = require('util')
    , CustomStrategy = require('passport-custom');


/**
 * `Strategy` constructor.
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options) {
    this.name = 'sample-authentication';
    var verify = function(accessToken, refreshToken, profile, done) {
        console.log('verify');
        process.nextTick(function () {
            return done(null, profile);
        });
    };
    console.log('CustomStrategy init');
    CustomStrategy.call(this, options, verify);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, CustomStrategy);


/**
 * Authenticate request by delegating to Facebook using OAuth 2.0.
 *
 * @param {Object} req
 * @param {Object} options
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
    console.log('authenticate');
    CustomStrategy.prototype.authenticate.call(this, req, options);
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
