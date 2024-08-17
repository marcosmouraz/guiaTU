const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Empreendedores = db.define(
  "empreendedores",
  {
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    senha_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome_estabelecimento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numero_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.CHAR,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Desativa a criação automática dos campos createdAt e updatedAt
  }
);

module.exports = Empreendedores;
