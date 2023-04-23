import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [conta, setConta] = useState('');
  const [agencia, setAgencia] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [numero, setNumero] = useState('');
  const [operadora, setOperadora] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5500/api', {
        nome: nome,
        cnpj: cnpj,
        sobrenome: sobrenome,
        email: email,
        senha: senha,
        conta: conta,
        agencia: agencia,
        tipo: tipo,
        numero: numero,
        operadora: operadora,
        saldo: saldo
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
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </div>
      <div>
        <label>Sobrenome:</label>
        <input type="text" value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
      </div>
      <div>
        <label>CNPJ:</label>
        <input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} />
      </div>
      <div>
        <label>Conta:</label>
        <input type="text" value={conta} onChange={e => setConta(e.target.value)} />
      </div>
      <div>
        <label>Agência:</label>
        <input type="text" value={agencia} onChange={e => setAgencia(e.target.value)} />
      </div>
      <div>
        <label>Saldo:</label>
        <input type="number" value={saldo} onChange={e => setSaldo(e.target.value)} />
      </div>
      <div>
        <label>Número:</label>
        <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
      </div>
      <div>
        <label>Operadora:</label>
        <input type="text" value={operadora} onChange={e => setOperadora(e.target.value)} />
      </div>
      <button type="submit">astrar</button>
    </form>
  );
}

export default Cadastro;
