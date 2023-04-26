import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';

const url = "http://localhost:5500/api";

const PageLogin: React.FC = () => {

  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const user = {
    Login: cnpj,
    Senha: password
  }

  let lista =  [{
    nome: '',
    cnpj: '',
    sobrenome: '',
    email: '',
    senha: '',
    saldo:'',
    agencia:'',
    conta:''
  }];

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

  axios.get(url)
  .then(response => {
    var listaUser = response.data.users;
    lista = listaUser;
  }).catch(error => error)
  

  function entrar(){
    for(var i = 0; i < lista.length; i ++){
      if(user.Login == lista[i].cnpj  && user.Senha == lista[i].senha ){
        userLogado = lista[i];
        axios.put(url, userLogado) //ATUALIZA O USER LOGADO NA API DE USERS 
        .then().catch(error => console.log(error))
      }
    }
    if(userLogado.cnpj == user.Login && userLogado.senha == user.Senha){
      history.push(""); //colocar aqui a pag apos logar
    }
    else{
      const element = <h1 id='texto-erro'>Usuário ou Senha Incorretos</h1>;
      ReactDOM.render(element, document.getElementById('erro'));
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={entrar}>
        <div>
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div id="erro"></div>
    </div>
  );
}

export default login;
