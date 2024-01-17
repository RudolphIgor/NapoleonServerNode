require('dotenv').config()
const express = require("express")
const sequelize = require('./db')


const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await  sequelize.sync()
        app.listen(3000, HOST,() => {
            console.log(`Server is started is ${HOST} on port: ${PORT}` )
        })
    } catch (e) {
        console.log(e)
    }
}

const HOST = process.env.HOST || localhost
const PORT = process.env.PORT || 7000

start()