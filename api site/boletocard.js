const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const document = dom.window.document;


function pagarBoleto() {
    var numeroBoleto = document.getElementById("numeroBoleto").value;
    var valorBoleto = parseFloat(document.getElementById("valorBoleto").value);
    var numeroCartao = document.getElementById("cartaoCredito").value;
    var validadeCartao = document.getElementById("validadeCartao").value;
    var codigoSeguranca = document.getElementById("codigoSeguranca").value;
    
    // Chama API de pagamento com cartão de crédito para processar a transação 
    // Se a transação for aprovada, exibe uma mensagem de sucesso
    alert("Boleto " + numeroBoleto + " pago com sucesso!");
    
    document.getElementById("numeroBoleto").value = "";
    document.getElementById("valorBoleto").value = "";
    document.getElementById("cartaoCredito").value = "";
    document.getElementById("validadeCartao").value = "";
    document.getElementById("codigoSeguranca").value = "";
  }
module.exports = {pagarBoleto};