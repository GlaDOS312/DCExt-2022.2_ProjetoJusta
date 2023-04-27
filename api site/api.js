const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const { verificarPagamento } = require('./boleto.js');
const recarga = require('./recarga.js');
const { pagarBoleto } = require('./boletocard.js');
const bodyParser = require("body-parser");
let users = require('./users.json');
const simulador = require('./transferencia.js');
const { exibirTaxas } = require('./perfillojista.js');
const relatorio = require('./relatorio');
const { buscarDadosChave, realizarTransferencia } = require('./pix.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
fs.readFile("users.json", function(err, data){ //PUXA DADOS DOS USUÁRIOS DO SITE
  if(err){
    throw err;
  }

  users = JSON.parse(data); // preencher a variável com os dados lidos do arquivo
})


let userLogado = {
  nome: '',
  cnpj: '',
  sobrenome: '',
  email: '',
  senha: '',
  saldo:'',
  agencia:'',
  conta:''
}; 


app.listen(5500, () => {
    console.log('servidor online na porta http://localhost:5500/api');
})  
app.route('/api').get((req, res) => res.json({
  users, userLogado
}))

  
  app.route('/api/:id').get((req, res) => {
    const userId = req.params.id;
  
    const user = users.find(user => Number(user.id) === Number(userId));
  
    if (!user) {
      return res.json('User not found!')
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
      saldo: req.body.saldoCad,
      conta: req.body.contaCad,
      agencia: req.body.agenciaCad,
      tipo: req.body.tipoCad,
      numero: req.body.numeroCad,
      operadora: req.body.operadoraCad
    })
    res.json('Saved user');
    fs.writeFile("users.json",JSON.stringify(users), err => { //ESCREVE DADOS RECEBIDOS PELA API NO .JSON
      if (err) {throw err;} 
    })
  })
  
  
  app.route('/api/:id').put((req, res) => {

  
    const updatedUser = {
     
      nome: req.body.nome,
      cnpj: req.body.cnpj,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      senha: req.body.senha,
      saldo: req.body.saldo,
      conta: req.body.conta,
      agencia: req.body.agencia,
      tipo: req.body.tipo,
      numero: req.body.numero,
      operadora: req.body.operadora
    }
  
    userLogado = updatedUser;
 
  
    res.json("Updated user");
  })
  
  app.route('/api/:id').delete((req, res) => {
    const userId = req.params.id;
  
    users = users.filter(user => Number(user.id) !== Number(userId))
  
    res.json('Deleted User');
  })
  
  fs.writeFile("users.json",JSON.stringify(users), err => {
    if (err) {throw err;} 
  })
  app.get('/api/home', (req, res) => {
    const home = users.map(user => ({ nome: user.nome, saldo: user.saldo }));
    res.json(home);
  });
  

  app.post("/recarga", function(req, res) {
    const numero = req.body.numero;
    const operadora = req.body.operadora;
    const valor = parseInt(req.body.valor);

    const resultado = recarga.realizarRecarga(numero, operadora, valor);
    res.json(resultado);
  });

  app.post('/verificar-pagamento', (req, res) => {
    const { numeroBoleto, dataVencimento, valorBoleto } = req.body;
  
    const resultado = verificarPagamento(numeroBoleto, dataVencimento, valorBoleto);
  
    res.json(resultado);
  });
  app.post('/pagarBoleto', (req, res) => {
    const {numeroBoleto, valorBoleto, numeroCartao, validadeCartao, codigoSeguranca } = req.body;
    const transacaoAprovada = pagarBoleto(numeroBoleto, valorBoleto, numeroCartao, validadeCartao, codigoSeguranca);
      // Verifica se a transação foi aprovada e envia a resposta adequada
    if (transacaoAprovada) {
      res.json({ mensagem: 'Transação aprovada!' });
    } else {
      res.status(400).json({ mensagem: 'Não foi possível realizar a transação!' });
    }
});

app.post('/transferencia', function(req, res) {
  const { nomeReceptor, cpfCnpjReceptor, bancoReceptor, agenciaReceptor, contaReceptor, valorTransferencia } = req.body;

  // Use a função de validação antes de realizar a transferência
  if (!simulador.validarContaBancaria(agenciaReceptor, contaReceptor)) {
    return res.status(400).send('Conta bancária inválida.');
  }

  // Use a função de simulação para realizar a transferência
  const transferencia = simulador.simularTransferencia(nomeReceptor, cpfCnpjReceptor, bancoReceptor, agenciaReceptor, contaReceptor, valorTransferencia);

  // Verifique se a transferência foi realizada com sucesso
  if (!transferencia) {
    return res.status(400).send('Não foi possível realizar a transferência.');
  }

  return res.send('Transferência realizada com sucesso!');
});

  app.get('/taxas', (req, res) => {
    const taxas = exibirTaxas();
    res.send(JSON.stringify(taxas));
  });  
  
  app.get('/beneficios/:perfil', (req, res) => {
    const perfil = req.params.perfil;
    const beneficios = exibirBeneficios(perfil);
    res.send(beneficios);
  });

  app.get('/relatorio', (req, res) => {
    const relatorioGerado = relatorio.gerarRelatorio();
    res.send(relatorioGerado);
  });

  app.post('/pix', (req, res) => {
    const { valor, saldo } = req.body;
    const transferenciaRealizada = realizarTransferencia(valor, saldo);
    if (transferenciaRealizada) {
      res.status(200).send('Transferência realizada com sucesso.');
    } else {
      res.status(400).send('Não foi possível realizar a transferência.');
    }
  });
  
  app.get('/chaves/:valorChave', (req, res) => {
    const valorChave = req.params.valorChave;
    const dados = buscarDadosChave(valorChave);
    if (dados) {
      res.status(200).json(dados);
    } else {
      res.status(404).send('Chave não encontrada');
    }
  });
  
  

