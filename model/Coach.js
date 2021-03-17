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
        contato: DataTypes.STRING,

        OrientadorId: {
          type: DataTypes.INTEGER,
          references: {
            model: Orientador,
            key: 'id'
          }
        }
    }
);

Coach.belongsTo(Turma);

Coach.belongsTo(Orientador);
Orientador.hasMany(Coach, {as: "Coaches"});

module.exports = Coach;