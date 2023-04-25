function verificarPagamento(numeroBoleto, dataVencimento, valorBoleto) {
  var hoje = new Date();
  var vencimento = new Date(dataVencimento);
  
  if (hoje.getTime() > vencimento.getTime()) {
    return "Boleto vencido!";
  } else {
    var saldo = 1000.00; // saldo fictício
    if (valorBoleto > saldo) {
      return "Saldo insuficiente!";
    } else {
      return "Boleto pago com sucesso!";
    }
  }
}

module.exports = {
  verificarPagamento : verificarPagamento
}
