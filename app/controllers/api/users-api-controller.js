/**
 * User
 * @version 0.0.1
 *
 * */

var User = require('../../models/user');

/**
 * @api {get} /sys/f/mid/:id/r Get result from search in filter by MID.
 * @apiName Get Filter Info by MID
 * @apiParam {String} id FilterID
 * @apiGroup Filter
 *
 */

var ValidationMessage = require('custom-validation');

exports.createProfile = function (req, res) {
    try {

        let forms = req.body;

        if (!forms.first_name) {
            throw new ValidationMessage('ErrorLoginUsernameInvalid');
        }

        if (!forms.last_name) {
            throw new ValidationMessage('ErrorLoginPasswordInvalid');
        }

        let _user = new User(forms);
        _user.save(function(err, r){
            if(err){
                throw new ValidationMessage('ErrorHaveSomethingWrong');
            }else{
                return res.send({ code: 0, message:"complete."});
            }
        });

    } catch (e) {
       res.status(e.getCode()).json(e);
    }
}

exports.getProfileById = function () {

}

exports.getProfileDetailAsync = function (req, res) {

}


