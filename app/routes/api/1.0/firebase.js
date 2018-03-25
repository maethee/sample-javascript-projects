/**
 * Firebase routers
 *
 * */

var express = require('express');
var router = express.Router();

var firebaseApi = require('../../../controllers/api/google-firebase.api');

/**
 * All of User Routes
 *
 * */

router.get('/feeds',firebaseApi.getList);


module.exports = router;
