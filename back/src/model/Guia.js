const { DataTypes } = require("sequelize")
const db = require("../database/database")

const Guia = db.define('guias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cpf: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: true
    },
    credencial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha_hash: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
        timestamps: false, 
    
});

module.exports = Guia;