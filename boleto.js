  function verificarPagamento() {
    var numeroBoleto = document.getElementById("numeroBoleto").value;
    var dataVencimento = new Date(document.getElementById("dataVencimento").value);
    var valorBoleto = parseFloat(document.getElementById("valorBoleto").value);

    var hoje = new Date();
    
    if (hoje.getTime() > dataVencimento.getTime()) {
      alert("Boleto vencido!");
    } else {
      var saldo = 1000.00; // saldo fictício
      if (valorBoleto > saldo) {
        alert("Saldo insuficiente!");
      } else {
        alert("Boleto pago com sucesso!");
      }
    }
  }
