/**
 * Firebase Model testing
 *
 * */

var Feed = require('../../app/providers/google-firebase/models/feed.model');


let _model = new Feed({});

let arrayModels = [];

arrayModels.push(_model.toObject())
arrayModels.push(_model.toObject())
console.log(arrayModels);
