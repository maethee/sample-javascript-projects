/**
 * @name Cron
 * @desc crons are background process
 *
 * */

const cron = require('cron');

let scrape = require('./scrape_facebook_feed');

let cronSchedule = function () {

    /**
     * This job execute every 2 hours
     *
     * */
    // let cronFacebookScrape = cron.job('* * */2 * * *', function(){
    //     scrape.cronScrapeFacebookFeed();
    // });
    //cronFacebookScrape.start();
    scrape.cronScrapeFacebookFeed();

}

cronSchedule();

module.exports = cronSchedule;
