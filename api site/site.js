const express = require('express');
const cors = require('cors');
const fs = require('fs');



const app = express();


app.use(cors());
app.use(express.json());

app.listen(5500, () => {
    console.log('servidor online na porta http://localhost:5500/api');
})

fs.readFile("users.json", function(err, data){ //PUXA DADOS DOS USUÁRIOS DO SITE
    if(err){
      throw err;
    }
  
    users = JSON.parse(data);
    
  })
  
  app.route('/api').get((req, res) => res.json({ //SITE
    users
  }))
  
  app.route('/api/:id').get((req, res) => {
    const userId = req.params.id;
  
    const user = users.find(user => Number(user.id) === Number(userId));
  
    if (!user) {
      return res.json('User nor found!')
    }
  
    res.json(user);
  })
  
  app.route('/api').post((req, res) => { //CADASTRA NOVOS USUÁRIOS DO SITE
    const lastId = users[users.length - 1].id;
    users.push({
      id: lastId + 1,
      nome: req.body.nomeCad,
      cnpj: req.body.cnpjCad,
      sobrenome: req.body.sobrenomeCad,
      email: req.body.emailCad,
      senha: req.body.senhaCad,
      saldo: req.body.saldoCad
    })
    res.json('Saved user');
    fs.writeFile("users.json",JSON.stringify(users), err => { //ESCREVE DADOS RECEBIDOS PELA API NO .JSON
      if (err) {throw err;} 
    })
  })
  
  
  app.route('/api/:id').put((req, res) => {
    const userId = req.params.id;
  
    const user = users.find(user => Number(user.id) === Number(userId));
  
    if (!user) {
      return res.json('User nor found!')
    }
  
    const updatedUser = {
      ...user,
      nome: req.body.nomeCad,
      cnpj: req.body.cnpjCad,
      sobrenome: req.body.sobrenomeCad,
      email: req.body.emailCad,
      senha: req.body.senhaCad,
      saldo: req.body.saldoCad
    }
  
    users = users.map(user => {
      if (Number(user.id) === Number(userId)) {
        user = updatedUser;
      }
      return user;
    })
  
    res.json("Updated user");
  })
  
  app.route('/api/:id').delete((req, res) => {
    const userId = req.params.id;
  
    users = users.filter(user => Number(user.id) !== Number(userId))
  
    res.json('Deleted User');
  })
  //Adicionar saldo na conta do usuário
  app.route('/api/:id/saldo').post((req, res) => {
    const userId = req.params.id;
  
    const user = users.find(user => Number(user.id) === Number(userId));
  
    if (!user) {
      return res.json('Usuário não encontrado!')
    }
  
    const valor = req.body.valor;
  
    if (!valor || valor <= 0) {
      return res.json('Inválido');
    }
  
    user.saldo += valor;
  
    res.json('Saldo adicionado com sucesso!');
  
    fs.writeFile("users.json",JSON.stringify(users), err => {
      if (err) {throw err;} 
    })
  })
  