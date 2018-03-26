/**
 * Firebase Model testing
 *
 * */
var path = require('path')
var firebase = require('../../app/providers/google-firebase');
var FeedFactory = require('../../app/providers/google-firebase/factories').FeedFactory;


firebase();

describe("Google firesbase models testing", function () {

    describe("FeedFactory testing", function () {

        var factory = new FeedFactory();
        it("should update data from facebook by updateList method", async function () {

            try{
                let _mock = require(path.join(__dirname, '../mock/facebook-feed.mock.json'));
                let _ids = [];

                _mock.data.forEach( v =>{
                    _ids.push(v.id);
                })

                let r = await factory.updateList(_mock.data);
                expect().nothing();

            }catch (e){
                fail(e)
            }

        });

    });

});
