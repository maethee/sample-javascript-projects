/**
 *  Custom validation
 *  @desc match and return validation object
 *  @author Maethee chokkuchantorn
 *  @company Fly digital
 * */

const i18n = require('i18n');

class ValidationMessage {
    constructor(name,ops){
        let _ops = typeof ops === 'object' ? ops : {};
        this.message = i18n.__l(`validate.${name}`)[0] ;
        this.name = name;
        this.code = _ops.code || 400;
        this.statusCode = _ops.statusCode || 400;
    }

    getCode(){
        return this.code;
    }
}

module.exports = ValidationMessage;
