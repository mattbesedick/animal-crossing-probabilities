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
    amountCaught: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('fishCaught', fishCaught)