const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const videoSchema = new Schema({
    link: {
        type: String,
        required: true,
    },
    title: {
        type: String
    },
    description: String,

});

const video = mongoose.model('video',videoSchema);
module.exports = video;