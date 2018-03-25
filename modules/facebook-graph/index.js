/**
 * Facebook graph api
 *
 * */

var Facebook = require('./src/facebook-graph');

module.exports = function(...args){
    return new Facebook(args);
}
