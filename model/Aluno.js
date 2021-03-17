const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Aluno = db.define("Aluno",
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
        
        TurmaId: {
          type: DataTypes.INTEGER,
          references: {
            model: Turma,
            key: 'id'
          }
    }
});

Aluno.belongsTo(Turma);
Turma.hasMany(Aluno, {as: "Alunos"});

module.exports = Aluno;