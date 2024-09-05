const { DataTypes } = require("sequelize");
const sequelize = require("../database/database"); // importar a configuração do banco

const RotaTur = sequelize.define(
  "RotaTur",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    partida: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    paradaUm: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    paradaDois: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    destino: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    valor: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    turista_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Turistas", // Tabela de referência
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "rotaTur",
    timestamps: false,
  }
);

module.exports = RotaTur;
