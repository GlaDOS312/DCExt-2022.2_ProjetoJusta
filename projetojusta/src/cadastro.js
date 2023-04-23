import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [nomeCad, setNome] = useState('');
  const [sobrenomeCad, setSobrenome] = useState('');
  const [emailCad, setEmail] = useState('');
  const [senhaCad, setSenha] = useState('');
  const [cnpjCad, setCnpj] = useState('');
  const [contaCad, setConta] = useState('');
  const [agenciaCad, setAgencia] = useState('');
  const [saldoCad, setSaldo] = useState(0);
  const [numeroCad, setNumero] = useState('');
  const [operadoraCad, setOperadora] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5500/api', {
        nome: nomeCad,
        cnpj: cnpjCad,
        sobrenome: sobrenomeCad,
        email: emailCad,
        senha: senhaCad,
        conta: contaCad,
        agencia: agenciaCad,
        tipo: tipoCad,
        numero: numeroCad,
        operadora: operadoraCad,
        saldo: saldoCad
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nomeCad} onChange={e => setNome(e.target.value)} />
      </div>
      <div>
        <label>Sobrenome:</label>
        <input type="text" value={sobrenomeCad} onChange={e => setSobrenome(e.target.value)} />
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" value={emailCad} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senhaCad} onChange={e => setSenha(e.target.value)} />
      </div>
      <div>
        <label>CNPJ:</label>
        <input type="text" value={cnpjCad} onChange={e => setCnpj(e.target.value)} />
      </div>
      <div>
        <label>Conta:</label>
        <input type="text" value={contaCad} onChange={e => setConta(e.target.value)} />
      </div>
      <div>
        <label>Agência:</label>
        <input type="text" value={agenciaCad} onChange={e => setAgencia(e.target.value)} />
      </div>
      <div>
        <label>Saldo:</label>
        <input type="number" value={saldoCad} onChange={e => setSaldo(e.target.value)} />
      </div>
      <div>
        <label>Número:</label>
        <input type="text" value={numeroCad} onChange={e => setNumero(e.target.value)} />
      </div>
      <div>
        <label>Operadora:</label>
        <input type="text" value={operadoraCad} onChange={e => setOperadora(e.target.value)} />
      </div>
      <button type="submit">astrar</button>
    </form>
  );
}

export default Cadastro;
