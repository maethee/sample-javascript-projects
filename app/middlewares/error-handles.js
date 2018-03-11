/**
 * Error handles
 * @desc handle errors is occur on server for client.
 *
 * @author Maethee
 * @email maethee.chakkuchhantorn@gmail.com
 * */

/**
 * logHandle
 * @desc if you want to do something with errors
 * */
let _logHandle = function (err, req, res, next) {
    console.error(err.stack)
    next(err)
}

/**
 * clientHandle
 * @desc handle error with xhr requests
 * */
let _clientHandle = function (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}

/**
 * normallyHandle
 * @desc last step of error handle.
 *
 * */
let _normallyHandle = function (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}

module.exports = {
    logHandle: _logHandle,
    clientHandle: _clientHandle,
    normallyHandle: _normallyHandle
};
