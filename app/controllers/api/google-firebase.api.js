/**
 * @name Google firebase api
 * @version 0.0.1
 * */

var FeedFactory = require('../../providers/google-firebase/factories').FeedFactory

/**
 * @function getList
 * @desc function will query data from firebase and filters
 *
 * @params ...
 * */

exports.getList = async function (req, res) {

    try {
        let _params = req.params
        let factory = new FeedFactory();
        let result = await factory.getList(_params);
        res.json(result)

    } catch (e) {
        console.log(e);
        res.status(e.getCode()).json(e);
    }

}
