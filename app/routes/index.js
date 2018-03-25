/**
 * Routes
 *
 * @desc all of routers in system.
 * */

var express = require('express');
var router = express.Router();

/**
 * Api
 * @desc control routes of api
 * @version 0.0.1
 * */
var apiVersion_01 = require('./api/1.0');
router.use('/api/',apiVersion_01);



module.exports = router;
