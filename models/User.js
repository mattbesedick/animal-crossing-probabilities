const mongoose = require('mongoose')
const Fish = require('./Fish')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fishCaught: [
        {
            ref: Fish
        }
    ]
})

module.exports = mongoose.model('User', userSchema)