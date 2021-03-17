const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Turma = db.define("Turma",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    }
);

Turma.belongsTo(Coach);

module.exports = Turma;