const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const document = dom.window.document;

let saldo = 5000;

function simularTransferencia() {
if (bancoReceptor === "outros") {
    document.getElementById("outros-bancos").style.display = "block";
    bancoReceptor = document.getElementById("outros-banco-receptor").value;
  } else {
    document.getElementById("outros-bancos").style.display = "none";
  }
  
    //form
    var nomeReceptor = document.getElementById("nome-receptor").value;
    var cpfCnpjReceptor = document.getElementById("cpf-cnpj-receptor").value;
    var bancoReceptor = document.getElementById("banco-receptor").value;
    var agenciaReceptor = document.getElementById("agencia-receptor").value;
    var contaReceptor = document.getElementById("conta-receptor").value;
    var valorTransferencia = document.getElementById("valor-transferencia").value;

    if (valorTransferencia > saldo) {
        alert("Saldo insuficiente para realizar a transferência!");
        return;
      }
  
    if (nomeReceptor === "" || cpfCnpjReceptor === "" || bancoReceptor === "" || agenciaReceptor === "" || contaReceptor === "" || valorTransferencia === "") {
      document.getElementById("resultado-transferencia").innerHTML = "Por favor, preencha todos os campos.";
      return;
    }

  if (bancoReceptor === "outros") {
    document.getElementById("outros-bancos").style.display = "block";
    bancoReceptor = document.getElementById("outros-banco-receptor").value;
  } else {

    document.getElementById("outros-bancos").style.display = "none";
  }
  
    
    if (!validarContaBancaria(agenciaReceptor, contaReceptor)) {
      document.getElementById("resultado-transferencia").innerHTML = "Conta bancária inválida.";
      return;
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
  

    document.getElementById("resultado-transferencia").innerHTML = "Transferência de R$" + valorTransferencia + " para " + nomeReceptor + " (" + cpfCnpjReceptor + ") no banco " + bancoReceptor + " agência " + agenciaReceptor + " conta " + contaReceptor + ". Tipo de transferência: " + tipoTransferencia + ".";
    saldo -= valorTransferencia;

    alert(`Transferência realizada com sucesso!\n\nBanco: ${banco.replace(/<br>/g, '\n')} Agência: ${agencia.replace(/<br>/g, '\n')} Conta: ${conta.replace(/<br>/g, '\n')} Tipo: ${tipo.replace(/<br>/g, '\n')} Valor: R$${valor}`);


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

  alert(`Transferência realizada com sucesso!\n\nBanco: ${banco}<br>Agência: ${agencia}<br>Conta: ${conta}<br>Tipo: ${tipo}<br>Valor: R$${valor}`);

  module.exports = {
    simularTransferencia,
    validarContaBancaria
  }
  