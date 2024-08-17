const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("Conexão Ativa")
} catch (error) {
    console.log(error) 
}

module.exports = sequelize