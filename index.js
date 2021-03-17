const Sequelize = require("sequelize");
const db = require("./db");
const Orientador = require("./model/Orientador");

async function sincronizar(){
  await db.sync();
}

async function inserir(){
  await Orientador.create({email: "exemplo@gmail.com", senha: "1234", contato: "99999-8888"});
}

async function consultar(){
  const orientador = await Orientador.findAll();
  console.log(orientador);
}

//sincronizar();
//inserir();
consultar();

