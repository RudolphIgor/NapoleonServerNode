require('dotenv').config()
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await  sequelize.sync()
        app.listen(3000, HOST,() => {
            console.log('***Соединение с БД было успешно установлено***')
            console.log(`***Сервер запушен на ${HOST} порт: ${PORT}***`)
        })
    } catch (e) {
        console.log('***Невозможно выполнить подключение к БД: ',e)
    }
}

const HOST = process.env.HOST || localhost
const PORT = process.env.PORT || 7000

start()