const mongoose = require('mongoose');

const JokeSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    partone: {
        type: String,
        required: true
    },
    parttwo: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Jokes', JokeSchema);