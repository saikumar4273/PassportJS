const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    displayName: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    google: {
        type: Object
    },
    twitter: {
        type: Object
    },
    facebook: {
        type: Object
    }
});

module.exports = mongoose.model('User', userSchema);