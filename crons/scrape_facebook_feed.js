

const FacebookGraph = require('facebook-graph');
const FeedFactory = require('../app/providers/google-firebase/factories').FeedFactory;

/**
 * @function _cronScrapeFacebookFeed
 * @desc collected feed from facebook. It call graph facebook to get data and save to firebase.
 *
 * */

async function _cronScrapeFacebookFeed() {

    try{
        let graph = FacebookGraph({});
        let factory = new FeedFactory();

        let feeds = await graph.query('GET', '/cnn/feed?fields=caption,description,message,link,message_tags,picture,coordinates,name,created_time,comments');
        let result = await factory.updateList(feeds.data);

        return true;
    }catch (e){
        console.log('e', e)
        return e;
    }

}

module.exports = {
    cronScrapeFacebookFeed: _cronScrapeFacebookFeed
}
