const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const gallerySchema = new Schema({
    image: {
        type: String,
        required: true,
        default: "https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png"
    },
    genre: {
        type: String
    },
    exif: {
        type: Object
    },
    description: String,

});

const gallery = mongoose.model('gallery',gallerySchema);
module.exports = gallery;