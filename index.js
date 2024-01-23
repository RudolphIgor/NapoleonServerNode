require('dotenv').config()
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require("./routes");

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.json({message:'Hi'})
})
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