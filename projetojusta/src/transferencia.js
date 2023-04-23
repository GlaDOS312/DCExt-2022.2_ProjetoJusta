import axios from 'axios';

const [simulacao, setSimulacao] = useState({});

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5500/simular-transferencia', {
      nomeReceptor: nomeReceptor,
      cpfCnpjReceptor: cpfCnpjReceptor,
      bancoReceptor: bancoReceptor,
      agenciaReceptor: agenciaReceptor,
      contaReceptor: contaReceptor,
      valorTransferencia: valorTransferencia
    })
    .then(response => {
      setSimulacao(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Código do formulário */}
        <button type="submit">Simular transferência</button>
      </form>
      {simulacao &&
        <div>
          <p>Valor simulado: R$ {simulacao.valorTransferencia}</p>
        </div>
      }
    </div>
  );
  