/**
 *  Language
 *  @desc Middle redirect site language for SEO
 *  @author Maethee chokkuchantorn
 *  @company Fly digital
 * */
const config = require('config');

var _acceptsLanguagesRedirect = function(req,res,next) {
    var _accepLang = req.acceptsLanguages();
    var _list = config.lang.list;
    var _d = config.lang.default;

    if(req.path === '/'){
        var _alang = _accepLang[1] || _d;
        if(_list[_alang]){
            return res.redirect(`/${_alang}`);

        }else{
            return res.redirect(`/${_d}`);
        }
    }else{
        next();
    }

}

var _localMiddle = function (req,res,next) {
    var _accepLang = req.acceptsLanguages();
    var _list = config.lang.list;
    var _d = config.lang.default;

    if(req.params.lang){

        var _l = _list[req.params.lang];
        if(_l){
            req.setLocale(req.params.lang);
            next();
        }else{
            res.redirect(`/${_d}`);
        }

    }
}

module.exports = {
    acceptsLanguagesRedirect:_acceptsLanguagesRedirect,
    localMiddle:_localMiddle
};

