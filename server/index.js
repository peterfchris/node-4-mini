require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const {SERVER_PORT, SESSION_SECRET} = process.env
const msg_ctrl = require('./messagesCtrl')
const session = require('express-session')

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.listen(SERVER_PORT, () => console.log(`magic is happening on ${SERVER_PORT}`))

app.get('/api/messages', messageCtrl.getAllMessages)
app.post('/api/message', messageCtrl.createMessage)