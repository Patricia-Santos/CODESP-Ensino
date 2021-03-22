require('dotenv').config()
const { Op, Model } = require('sequelize');
let db = require("./db");
const Aluno = require("./model/Aluno");
const Coach = require("./model/Coach");
const Orientador = require("./model/Orientador");
const Turma = require("./model/Turma");

async function sincronizar() {
    await db.sync({force: true});
}

async function inserir() {
    await Orientador.create({email: "exemplo@gmail.com", senha: "1234", contato: "99999-8888"});
}

async function consultar() {
  const orientador = await Orientador.findAll();
  console.log(orientador);
}

//sincronizar();
inserir();
//consultar();