const express = require("express")
const dotenv = require('dotenv').config()

const app = express()

const HOST = process.env.HOST || localhost
const PORT = process.env.PORT || 7000
app.listen(3000, HOST,() => {
    console.log(`Server is started is ${HOST} on port: ${PORT}` )
})