
/**
 * Facebook Graph test
 *
 * */

const FaceBookGraph = require('../index')

describe("Facebook Graph Testing", function () {

    let graph = new FaceBookGraph({})

    it("should get feed from facebook by token", function () {
        graph.query('GET','cnn/feeds');
        expect(2).toBe(6);
    });

});
