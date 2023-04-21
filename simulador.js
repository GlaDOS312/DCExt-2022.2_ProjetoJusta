function calcularParcelamento() {
    var valor = parseFloat(document.getElementById("valor").value);
    var parcelas = parseInt(document.getElementById("parcelas").value);
    var tipo = document.getElementById("tipo").value;
    var antecipacao = parseInt(document.getElementById("antecipacao").value);

    var taxa;
    if (tipo == "bronze") {
        taxa = 0.05;
    } else if (tipo == "prata") {
        taxa = 0.04;
    } else if (tipo == "ouro") {
        taxa = 0.03;
    }

    var valorParcela = (valor * (1 + taxa)) / parcelas;

    //valor da antecipação
    var valorAntecipacao = valor * (1 + taxa + (antecipacao / 100)) * (1 - (antecipacao / 100));

    valor = valor.toFixed(2);
    valorParcela = valorParcela.toFixed(2);
    valorAntecipacao = valorAntecipacao.toFixed(2);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>Valor da venda: R$" + valor + "</p>";
    resultado.innerHTML += "<p>Valor da parcela: R$" + valorParcela + "</p>";
    resultado.innerHTML += "<p>Valor com antecipação de " + antecipacao + " dias: R$" + valorAntecipacao + "</p>";
}
