


var FeedFactory = require('../../app/providers/google-firebase/factories').FeedFactory;
var firebase = require('../../app/providers/google-firebase')
firebase();


let feed = new FeedFactory();

let tem = {
    "caption": "cnn.com",
    "description": " ",
    "message": "Naomi was bored, so she started digging. She found a 65 million-year-old fossil.",
    "link": "https://cnn.it/2pBeedq",
    "picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQDRfYVJgy6pd4vW&w=130&h=130&url=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180319133920-02-oregon-child-find-ancient-fossil-trnd-super-tease.jpg&cfs=1&sx=288&sy=0&sw=619&sh=619&_nc_hash=AQDf2pMZW_kgpXmz",
    "coordinates": {},
    "name": "A 6-year-old girl goes digging in the dirt at her sister's soccer game -- and finds a 65 million-year-old fossil",
    "id": "5550296508_10158170612221511"
};

feed.createByID( tem.id, tem );
