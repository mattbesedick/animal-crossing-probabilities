const mongoose = require('mongoose')


const Schema = mongoose.Schema

const fishCaught = new Schema({
    name: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('fishCaught', fishCaught)