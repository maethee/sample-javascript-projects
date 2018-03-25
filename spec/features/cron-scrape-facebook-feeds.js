

/**
 * InitilizeGoogleFirebase
 *
 * */
var firebase = require('../../app/providers/google-firebase')
firebase();

var cronFacebook = require('../../crons/scrape_facebook_feed');

cronFacebook.cronScrapeFacebookFeed();

