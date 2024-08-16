const { DataTypes } = require("sequelize")
const db = require("../database/database")

const Turista = db.define("turistas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true,
      },
      pais: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      senha_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {

      timestamps: false, 
    }
)

module.exports = Turista