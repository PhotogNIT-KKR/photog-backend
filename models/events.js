const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    image: {
        type: String,
        default: 'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png'
    },
    description: String,
    rules: {
        type: Array,
    },
    contact: {
        type: Array,
    }
});

const event = mongoose.model('event',eventSchema);
module.exports = event;