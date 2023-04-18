/*function calcularValor() {
    var valor = parseFloat(document.getElementById("valor").value);
    var vencimento = new Date(document.getElementById("vencimento").value);
    var hoje = new Date();
    var diasAtraso = Math.floor((hoje - vencimento) / (1000 * 60 * 60 * 24));
    var valorTotal = valor;
    
    if (diasAtraso > 0) {
      valorTotal += (valor * 0.01 * diasAtraso);
    } else {
      valorTotal -= (valor * 1);
    }
    
    document.getElementById("valorTotal").value = valorTotal.toFixed(2);
  }
  */
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
