require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const {SERVER_PORT, SESSION_SECRET} = process.env

app.listen(SERVER_PORT, () => console.log(`magic is happening on ${SERVER_PORT}`))
