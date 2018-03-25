/**
 * @class FacebookGraph
 * @desc module helping connect with facebook graph
 * */

var FacebookGraphApi = require('./facebook-graph-api');

class FacebookGraph {

    constructor(options) {
        this._version = 'v2.12'
        this._baseUrl = 'https://graph.facebook.com';
        this._accessToken = 'EAACEdEose0cBAINzE3nqckDSE7msTcp4ixKGZCwPh3Uypq902laEcu75vm3Rh0DYrASmjZARdZBzt9UYEfluRqTK8PMYVy2zwJD5MP3s7ZCSoBKobZB2QIQjFv5LoGLdLGpf6UTj7tQanV0SRAeZCQYelUeZBqMOOwtGn92DyUZCHJcZBSzFAt22N6py23MzB6GEZD'
        this.graphApi = new FacebookGraphApi(this);
    }


    /**
     * @function query
     *
     *
     * @param  {String}   method     String point to call http method
     * @param  {String}   path       Graph Api that you want to do.
     *
     * @see document relation
     */
    async query( method, path ) {
         try {
             return await this.graphApi.api({ method, path });
         }catch (e){
             return e;
         }
    }

    /**
     * @function getFacebookUrl
     * @return {String} url  Facebook graph url
     *
     */
    getFacebookUrl() {
        return `${this._baseUrl}/${this._version}`
    }

    /**
     * @function getFacebookUrlByPath
     * @return {String} url combine baseUrl and path
     *
     */
    getFacebookUrlByPath(path) {
        let token = this.getToken();
        let len = path.split('?').length;

        return `${this.getFacebookUrl()}${path}${len === 1 ? '?' : '&'}access_token=${token}`
    }

    /**
     * @function getToken
     * @return {String} token of facebook.
     *
     */
    getToken() {
        return this._accessToken;
    }
}


module.exports = FacebookGraph;
