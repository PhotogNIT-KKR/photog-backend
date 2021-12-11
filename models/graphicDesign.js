const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const designingSchema = new Schema({
    image: {
        type: String,
        required: true,
        default: 'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png'
    },
    type: {
        type: String
    },
    description: String,

});

const designs = mongoose.model('designs',designingSchema);
module.exports = designs;