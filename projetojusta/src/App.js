import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [conta, setConta] = useState('');
  const [agencia, setAgencia] = useState('');
  const [tipo, setTipo] = useState('');
  const [numero, setNumero] = useState('');
  const [operadora, setOperadora] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const userData = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
      conta: conta,
      agencia: agencia,
      tipo: tipo,
      numero: numero,
      operadora: operadora
    };

    axios.post('http://localhost:5500/api', userData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={event => setNome(event.target.value)} />
      </label>
      <br />
      <label>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={event => setSobrenome(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={senha} onChange={event => setSenha(event.target.value)} />
      </label>
      <br />
      <label>
        Conta:
        <input type="text" value={conta} onChange={event => setConta(event.target.value)} />
      </label>
      <br />
      <label>
        Agência:
        <input type="text" value={agencia} onChange={event => setAgencia(event.target.value)} />
      </label>
      <br />
      <label>
        Tipo:
        <select value={tipo} onChange={event => setTipo(event.target.value)}>
          <option value="corrente">Corrente</option>
          <option value="poupança">Poupança</option>
        </select>
      </label>
      <br />
      <label>
        Número:
        <input type="text" value={numero} onChange={event => setNumero(event.target.value)} />
      </label>
      <br />
      <label>
        Operadora:
        <select value={operadora} onChange={event => setOperadora(event.target.value)}>
          <option value="oi">Oi</option>
          <option value="tim">Tim</option>
          <option value="vivo">Vivo</option>
          <option value="claro">Claro</option>
        </select>
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default UserForm;
