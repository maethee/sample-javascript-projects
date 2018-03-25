/**
 * @name FeedComment
 * @desc CRUD handle each object of firebase feed.
 *
 * */

class FeedComment {
    constructor(values) {
        this._values = values;
    }

    get id(){
        return this._values.id || '';
    }

    get message(){
        return this._values.message || '';
    }

    get created_time(){
        return this._values.created_time || '';
    }

    toObject(){
        return this._values;
    }
}


module.exports = Feed;
