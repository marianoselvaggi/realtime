const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;