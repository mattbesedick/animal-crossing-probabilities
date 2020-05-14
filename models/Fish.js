const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    available: {
        type: [String]
    },
    sellingPrice: {
        type: Number
    },
    imageUrl: {
        type: String
    }
})

module.exports = mongoose.model('Fish', fishSchema)