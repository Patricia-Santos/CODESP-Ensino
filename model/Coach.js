const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Coach = db.define("Coach",
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

module.exports = Coach;