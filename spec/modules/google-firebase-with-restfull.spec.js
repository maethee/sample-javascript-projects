/**
 * Google firebase with restfull
 *
 * */

const request = require('request');
const configs = require('../configs')

describe("Google firesbase with RESTfull API", function () {

    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
    });

    it("Route : /api/1/firebase/feeds Method: getList() ", function (done) {
        request(configs.paths.firebaseFeeds, {method: 'get', gzip: true, json: true},
            (e, res, body)=> {
               if(e) fail(e);
                expect(res.statusCode).toEqual(200);
                done();
            });
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});

