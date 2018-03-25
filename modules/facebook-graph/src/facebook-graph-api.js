/**
 * @class FacebookGraph
 * @desc module helping connect with facebook graph
 * */

const request = require('request');

class FacebookGraphApi {

    constructor( FacebookGraph ) {
        this.graph = FacebookGraph;
    }

    /**
     * @function api
     * @desc interrupting before call to facebook
     *
     * @param  {String}   method     String point to call http method
     * @param  {String}   path       Graph Api that you want to do.
     *
     */
    api({ method, path }) {
        return new Promise(async (resolve, reject) =>{

            try{
                if(typeof method != 'string'){
                    throw new Error('method is not String');
                }

                if(typeof this[`_${method.toLowerCase()}`] != 'function'){
                    throw new Error(`${method} not collect.`);
                }

                resolve(await this[`_${method.toLowerCase()}`]({ path }));
            }catch(e) {
                reject(e)
            }
        })
    }

    /**
     * @function _get
     * @desc http get to facebook
     *
     * @param  {String}   path       Graph Api that you want to do.
     *
     */
    _get({ path }) {
        return new Promise((resolve, reject)=>{
            request(`${this.graph.getFacebookUrlByPath( path )}`, {method: 'get', gzip: true, json: true},
                (e, res, body)=> {
                    if(e) reject(e);
                    resolve(body);
                });
        })
    }

}


module.exports = FacebookGraphApi;
