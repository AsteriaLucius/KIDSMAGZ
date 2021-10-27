const mongoose = require('mongoose');

const chatModel = new mongoose.Schema({
    accounts: {
        type: Array,
        "default": [],
        required: true,
    },
    chatId: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        senderId: {
            type: String,
            required: false
        }, 
        content: {
            type: String,
            required: false,
            unique: false
        },
        date: {
            type: Date,
            required: false
        }
    }]
})

module.exports = mongoose.model('Chat', chatModel)