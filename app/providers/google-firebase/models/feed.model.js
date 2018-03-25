/**
 * @name Feed
 * @desc CRUD handle each object of firebase feed.
 *
 * */

class Feed {
    constructor(values) {

        /**
         * Initialize data of model
         *
         * */
        this._values = {
            id: values.id || '',
            caption: values.caption || '',
            description: values.description || '',
            message: values.message || '',
            link: values.link || '',
            picture: values.picture || '',
            name: values.name || '',
            created_time: values.created_time || '',
            comments: typeof values.comments === 'object' ? values.comments : []
        };

    }

    get id(){
        return this._values.id || '';
    }

    get caption(){
        return this._values.caption || '';
    }

    get description(){
        return this._values.description || '';
    }

    get message(){
        return this._values.message || '';
    }

    get link(){
        return this._values.link || '';
    }

    get picture(){
        return this._values.picture || '';
    }

    get name(){
        return this._values.name || '';
    }

    get created_time(){
        return this._values.created_time || '';
    }

    get comments(){
        return this._values.comments || '';
    }

    toObject(){
        return this._values;
    }
}

module.exports = Feed;
