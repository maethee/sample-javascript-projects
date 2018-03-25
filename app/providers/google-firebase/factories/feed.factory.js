
var CoreFactory = require('./core.factory');
var firebase = require('firebase-admin');
var FeedModel = require('../models/feed.model');

class FeedFactory extends CoreFactory{
    constructor() {
        super();
        this._prefix = '/facebook_feeds'
    }

    getPrefix() {
        return this._prefix;
    }

    getPath(id){
        return `${this.getPrefix()}/${id}`;
    }

    /**
     * @method getID
     *
     * @param {String} id unique
     * @return {Object} FeedModel Promise for the completion of the callback
     * */
    getID() {
        return new Promise((resolve, reject) =>{
            firebase.database().ref(this.getPath(id)).once('value').then(function(snapshot) {
                resolve(new FeedModel(snapshot.val()));
            }).catch(function (e) {
                reject(e)
            });
        })
    }

    /**
     * @method getID
     *
     * @param {String} id unique
     * @return {Object} FeedModel Promise for the completion of the callback
     * */
    getList({}) {
        return new Promise((resolve, reject) =>{

            let ref = firebase.database().ref(this.getPrefix());
            /**
             * Query condition
             * */

            ref.once('value').then((snapshot) =>{
                let _tranform = [];
                if(snapshot.numChildren() > 0){
                    resolve(snapshot.val());
                }else{
                    resolve([]);
                }

            }).catch((e) =>{
                reject(e)
            });
        })
    }

    /**
     * @method createById
     *
     * @param {String} id unique
     * @param {Object} values Values of facebook feeds
     * @return {Object} FeedModel Promise for the completion of the callback
     * */
    createByID( id, values ) {
        return new Promise((resolve, reject) =>{
            firebase.database().ref(this.getPath(id)).set(values).then(() =>{
                resolve(true)
            }).catch((e) =>{
                reject(e)
            });
        });
    }

    /**
     * @method createById
     *
     * @param {String} id unique
     * @param {Object} values Values of facebook feeds
     * @return {Object} FeedModel Promise for the completion of the callback
     * */

    updateByID( id, data ) {
        return new Promise((resolve, reject) =>{
            firebase.database().ref(this.getPath(id)).once('value').then(function(snapshot) {
                resolve(new FeedModel(snapshot.val()));
            }).catch(function (e) {
                reject(e)
            });
        })
    }

    /**
     * @method updateList
     *
     * @param {Array} values Array of facebook feed you want to update
     * @return {Promise} Firebase Promise for the completion of the callback
     * */

    updateList(values) {

        var _updates = [];
        console.log('updateList',values);
        // if(typeof values != 'object'){
        //     reject(new Error('Value is not Array.'))
        // }

        values.forEach(function (value) {
            if( value.id ){
                let _model = new FeedModel(value);
                _updates[value.id] = _model.toObject();
            }
        });


        return firebase.database().ref(this.getPrefix()).set(_updates);

    }

}

module.exports = FeedFactory;
