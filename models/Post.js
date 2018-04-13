const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const PostSchema = new Schema({


    title: {

        type: String,
        require: true
    },

    status: {

        type: String,
        require: 'public'
    },

    allowComents: {

        type: Boolean,
        require: true
    },

    body: {

        type: String,
        require: true
    }


});

module.exports = mongoose.model('Post', PostSchema);






