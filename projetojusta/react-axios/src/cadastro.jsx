import React from 'react';
import axios from 'axios';
import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [saldo, setSaldo] = useState('');
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const [validNome, setValidNome] = useState(false);
  const [validSobreNome, setValidSobreNome] = useState(false);
  const [validCNPJ, setValidCNPJ] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validSenha, setValidSenha] = useState(false);
  const [validConfirmSenha, setValidConfirmSenha] = useState(false);

  const handleNomeChange = (e) => {
    const nome = e.target.value;
    if (nome.length <= 2) {
      setValidNome(false);
    } else {
      setValidNome(true);
    }
    setNome(nome);
  };

  const handleSobrenomeChange = (e) => {
    const sobrenome = e.target.value;
    if (sobrenome.length <= 2) {
      setValidSobreNome(false);
    } else {
      setValidSobreNome(true);
    }
    setSobrenome(sobrenome);
  };

  const handleCnpjChange = (e) => {
    const cnpj = e.target.value;
    if (cnpj.length <= 13) {
      setValidCNPJ(false);
    } else {
      setValidCNPJ(true);
    }
    setCnpj(cnpj);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (email.length <= 4) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    setEmail(email);
  };

  const handleSaldoChange = (e) => {
    const saldo = e.target.value;
    setSaldo(saldo);
  };

  const handleAgenciaChange = (e) => {
    const agencia = e.target.value;
    setAgencia(agencia);
  };

  const handleContaChange = (e) => {
    const conta = e.target.value;
    setConta(conta);
  };

  const handleSenhaChange = (e) => {
    const senha = e.target.value;
    if (senha.length <= 5) {
      setValidSenha(false);
    } else {
      setValidSenha(true);
    }
    setSenha(senha);
  };

  const handleConfirmSenhaChange = (e) => {
    const confirmSenha = e.target.value;
    if (senha !== confirmSenha) {
      setValidConfirmSenha(false);
    } else {
      setValidConfirmSenha(true);
    }
    setConfirmSenha(confirmSenha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nome,
      sobrenome,
      cnpj,
      email,
      saldo,
      agencia,
      conta,
      senha,
    };
    // salvar os dados no localStorage ou em algum banco de dados
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input 
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <span id="labelNome"></span>
        </label>
        <label htmlFor="sobrenome">
    Sobrenome:
    <input
      type="text"
      id="sobrenome"
      name="sobrenome"
      value={formData.sobrenome}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelSobreNome"></span>
  </label>

  <label htmlFor="cnpj">
    CNPJ:
    <input
      type="text"
      id="cnpj"
      name="cnpj"
      value={formData.cnpj}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelCNPJ"></span>
  </label>

  <label htmlFor="email">
    Email:
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelEmail"></span>
  </label>

  <label htmlFor="saldo">
    Saldo:
    <input
      type="number"
      id="saldo"
      name="saldo"
      value={formData.saldo}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelSaldo"></span>
  </label>

  <label htmlFor="agencia">
    Agência:
    <input
      type="text"
      id="agencia"
      name="agencia"
      value={formData.agencia}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelAgencia"></span>
  </label>

  <label htmlFor="conta">
    Conta:
    <input
      type="text"
      id="conta"
      name="conta"
      value={formData.conta}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelConta"></span>
  </label>

  <label htmlFor="senha">
    Senha:
    <input
      type="password"
      id="senha"
      name="senha"
      value={formData.senha}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelSenha"></span>
  </label>

  <label htmlFor="confirmSenha">
    Confirmar Senha:
    <input
      type="password"
      id="confirmSenha"
      name="confirmSenha"
      value={formData.confirmSenha}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span id="labelConfirmSenha"></span>
  </label>

  <button type="submit">Enviar</button>

  <div id="msgError"></div>
  <div id="msgSuccess"></div>
    </form>
    );
         

}
    function Cadastro() {
        const url = "http://localhost:5500/api";

        function handleCadastro(event) {
        event.preventDefault();

        const nomeCad = event.target.elements.nome.value;
        const cnpjCad = event.target.elements.cnpj.value;
        const sobrenomeCad = event.target.elements.sobrenome.value;
        const emailCad = event.target.elements.email.value;
        const senhaCad = event.target.elements.senha.value;
        const saldoCad = event.target.elements.saldo.value;
        const agenciaCad = event.target.elements.agencia.value;
        const contaCad = event.target.elements.conta.value;

        const listaUsers = {
          nome: nomeCad,
          cnpj: cnpjCad,
          sobrenome: sobrenomeCad,
          email: emailCad,
          senha: senhaCad,
          saldo: saldoCad,
          agencia: agenciaCad,
          conta: contaCad
        };

        if (validNome && validSobreNome && validEmail && validSenha && validConfirmSenha) {
          axios.post(url, listaUsers)
                .then(response => {
                  console.log("USER CADASTRADO");
                  localStorage.setItem('listaUsers', JSON.stringify(listaUsers));
                  msgSuccess.setAttribute('style', 'display: block');
                  msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
                  msgError.setAttribute('style', 'display: none');
                  msgError.innerHTML = '';
                  setTimeout(() => {
                        window.location.href = 'login.html';
                  }, 3000);
                })
                .catch(error => {
                  console.log(error);
                  msgError.setAttribute('style', 'display: block');
                  msgError.innerHTML = '<strong>Ocorreu um erro ao cadastrar o usuário</strong>';
                  msgSuccess.innerHTML = '';
                  msgSuccess.setAttribute('style', 'display: none');
                });
        } else {
          msgError.setAttribute('style', 'display: block');
          msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
          msgSuccess.innerHTML = '';
          msgSuccess.setAttribute('style', 'display: none');
        }
  }

  function togglePassword(event) {
        event.preventDefault();
        const inputSenha = document.querySelector('#senha');
        if (inputSenha.getAttribute('type') === 'password') {
          inputSenha.setAttribute('type', 'text');
        } else {
          inputSenha.setAttribute('type', 'password');
        }
  }

  function toggleConfirmPassword(event) {
        event.preventDefault();
        const inputConfirmSenha = document.querySelector('#confirmSenha');
        if (inputConfirmSenha.getAttribute('type') === 'password') {
          inputConfirmSenha.setAttribute('type', 'text');
        } else {
      inputConfirmSenha.setAttribute('type', 'password');
    }
  }

  return (
    <div>
      <form onSubmit={handleCadastro}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" required />

        <label htmlFor="cnpj">CNPJ:</label>
        <input type="text" id="cnpj" required />

        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" required />

        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" required />

        <button type="button" onClick={togglePassword}>
          Mostrar senha
        </button>

        <label htmlFor="confirmSenha">Confirmar senha:</label>
        <input type="password" id="confirmSenha" required />

        <button type="button" onClick={toggleConfirmPassword}>
          Mostrar senha
        </button>

        <label htmlFor="saldo">Saldo:</label>
        <input type="text" id="saldo" required />

        <label htmlFor="agencia">Agência:</label>
        <input type="text" id="agencia" required />

        <label htmlFor="conta">Conta:</label>
        <input type="text" id="conta" required />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="msgSuccess" id="msgSuccess"></div>
      <div className="msgError" id="msgError"></div>
    </div>
  );
}

export default Cadastro;

