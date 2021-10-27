const router = require('express').Router()
const { v4: uuid} = require("uuid")
const chatModelTemplate = require('../models/ChatlistModel')

router.post('/create', (req, res) => {
    const userid1 = req.body.userid1;
    const userid2 = req.body.userid2
    const sMessage = req.body.sMessage
    const date = new Date()

    const chatId = uuid().toString()
    const accounts = [userid1, userid2]
    const messages = [{
        sMessage,
        date
    }]

    const chat = new chatModelTemplate({
        accounts,
        chatId,
        messages
    })

    chat
        .save()
        .then(() => {
            res.status(200).json({
                success: true
            })
        })
        .catch((err) => res.json(err))

})

router.post('/', (req, res) => {
    const userid = req.body.userid;

    const chats = []

    chatModelTemplate.find({})
        .then((chatList) => {
            chatList.forEach(chat => {
                if ( chat.includes(userid) ) {
                    chats.push(chat)
                }
            });

            res.status(400).json(chats)
        })
        .catch((err) => res.json(err))
})

router.post('/chat', (req, res) => {
    const chatid = req.body.chatid

    chatModelTemplate.findOne({chatId: chatid })
        .then((chat) => {
            res.status(200).json(chat)
        })
        .catch((err) => res.json(err))
})

router.post('/addmessage', (req, res) => {
    const chatrId = req.body.chatid;
    const senderId = req.body.senderId
    const date = new Date()
    const content = req.body.content

    chatModelTemplate.findOne({chatId: chatrId})
        .then((chat) => {
            var accounts = chat.accounts
            var chatId = chat.chatId
            var messages = chat.messages

            messages.push({
                senderId,
                content,
                date
            })

            var newChat = {
                accounts,
                chatId,
                messages
            }
            
            chatModelTemplate.findOneAndUpdate({chatId: chatrId}, newChat)
                .then(() => {
                    res.status(200).json({
                        success: true
                    })
                })
                .catch((err) => res.json(err))
        })
})

module.exports = router