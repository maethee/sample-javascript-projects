/**
 * Api
 * @version 0.1
 *
 * */

var express = require('express');
var router = express.Router();


router.use('/1/user/',require('./user'));
router.use('/1/article/',require('./article'));



module.exports = router;
