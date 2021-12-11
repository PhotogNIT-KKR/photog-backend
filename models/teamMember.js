const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const teamMemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 1
    },
    preference: {
        type: String,
        default: "Photography"
    },
    position: {
        type: String,
        default: "Team Member"
    }
});

const teamMember = mongoose.model('teamMember', teamMemberSchema);
module.exports = teamMember;