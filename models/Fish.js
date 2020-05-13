const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fishSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Fish', fishSchema)