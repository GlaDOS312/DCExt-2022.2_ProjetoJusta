import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
// falta o css

function formulario(){

  const url = "http://localhost:5500/api";
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [agencia, setAgencia] = useState('')
  const [conta, setConta] = useState('')
  const [saldo, setSaldo] = useState('')
  const history = useHistory();

  var listaUsers ={
    nomeCad: nome,
    cnpjCad: cnpj,
    sobrenomeCad: sobrenome,
    emailCad: email,
    senhaCad: senha,
    saldoCad: saldo,
    agenciaCad: agencia,
    contaCad: conta
  }

  function newuser(){
    axios.post(url, listaUsers)
    .then(response => {
        console.log("USER CADASTRADO");
    })
    .catch(error => error)
  }

  function registrar(){
    console.log(listaUsers);
    newuser();
    alert("Usuario registrado com sucesso");
    history.push("/");// pagina apos cadastrar
  }

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={registrar}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Sobrenome:
          <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
        </label>
        <br />
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          CNPJ:
          <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <br />
        <label>
          Agência:
          <input type="text" value={agencia} onChange={(e) => setAgencia(e.target.value)} />
        </label>
        <br />
        <label>
          Conta:
          <input type="text" value={conta} onChange={(e) => setConta(e.target.value)} />
        </label>
        <br />
        <label>
          Saldo:
          <input type="text" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default PageLogin;
