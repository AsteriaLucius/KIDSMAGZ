const mongoose = require('mongoose')

const postScheema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    postHeading: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postScheema)