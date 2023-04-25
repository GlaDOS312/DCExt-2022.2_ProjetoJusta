let saldo = 5000;
let valorTransferencia = 10000;

function simularTransferencia(nomeReceptor, cpfCnpjReceptor, bancoReceptor, agenciaReceptor, contaReceptor, valorTransferencia) {
  if (bancoReceptor === "outros") {
    bancoReceptor = "outros-banco-receptor";
  }

  if (valorTransferencia > saldo) {
    console.log("Saldo insuficiente para realizar a transferência!");
    return false;
  }

  if (nomeReceptor === "" || cpfCnpjReceptor === "" || bancoReceptor === "" || agenciaReceptor === "" || contaReceptor === "" || valorTransferencia === "") {
    console.log("Por favor, preencha todos os campos.");
    return false;
  }

  if (!validarContaBancaria(agenciaReceptor, contaReceptor)) {
    console.log("Conta bancária inválida.");
    return false;
  }


  // Objeto date pra ver hora
  var agora = new Date();
  var horaAtual = agora.getHours();
  var minutoAtual = agora.getMinutes();

  // Verificar se ted ou doc
  var tipoTransferencia;
  if (horaAtual >= 08 && horaAtual < 16 && minutoAtual <= 59) {
    tipoTransferencia = "TED";
  } else {
    tipoTransferencia = "DOC";
  }

  console.log("Transferência de R$" + valorTransferencia + " para " + nomeReceptor + " (" + cpfCnpjReceptor + ") no banco " + bancoReceptor + " agência " + agenciaReceptor + " conta " + contaReceptor + ". Tipo de transferência: " + tipoTransferencia + ".");
  saldo -= valorTransferencia;
}

  function validarContaBancaria(agencia, conta) {

    if (isNaN(agencia) || isNaN(conta)) {
      return false;
    }
  
    // Verificar se a agência tem 4 dígitos
    if (agencia.length !== 4) {
      return false;
    }
  
    // Verifica se a conta tem 5 ou 6 dígitos
    if (conta.length !== 5 && conta.length !== 6) {
      return false;
    }
  
    return true;
  }

  saldo -= valorTransferencia;

  


  module.exports = {
    simularTransferencia,
    validarContaBancaria
  }
  