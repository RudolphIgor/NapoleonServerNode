const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //Имя БД
    process.env.DB_USER, //Пользователь
    process.env.DB_PASSWORD, //Пароль
    {
        dialect: "mysql", //Диалект
        host: process.env.DB_HOST, //Хост
        port: process.env.DB_PORT //Порт
    }
)