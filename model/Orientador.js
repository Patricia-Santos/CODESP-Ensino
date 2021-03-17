const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Orientador = db.define("Orientador",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contato: DataTypes.STRING
    }
);

module.exports = Orientador;