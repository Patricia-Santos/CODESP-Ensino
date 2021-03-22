require('dotenv').config();
//const Route = require('./routes/RouteGeneric');
//const Service = require('./service/ServiceGeneric');
const express = require("express");
const cors = require('cors')

const Aluno = require("./model/Aluno");
const Coach = require("./model/Coach");
const Orientador = require("./model/Orientador");
const Turma = require("./model/Turma");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.json({ message: 'API do CODESP-Ensino ativa!!!' })
});

Route("/Aluno", app, new Service(Aluno));

app.get("/aluno", async (req, res) => {
  let livros = await Aluno.findAll(); 
  res.json(alunos);
});

app.get("/coach/:id", async (req, res) => {
  let coach = await Coach.findByPk(req.params.id); 
  res.json(coach);
});

// Route("/Aluno",app, new Service(Aluno));

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})
