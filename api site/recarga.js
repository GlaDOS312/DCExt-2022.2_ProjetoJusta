
function realizarRecarga(numero, operadora, valor) {
    let cashback = 0;
    if (valor > 30) {
        if (valor <= 50) {
            cashback = valor * 0.05;
        } else if (valor <= 100) {
            cashback = valor * 0.1;
        } else {
            cashback = valor * 0.15;
        }
    }

    return {
        numero: numero,
        operadora: operadora,
        valor: valor.toFixed(2),
        cashback: cashback.toFixed(2)
    };
}
/*
// Esperar o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function(event) {
    const recargaForm = document.querySelector("#recarga-form");
    const resultadoDiv = document.querySelector("#resultado");

    recargaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const numero = document.querySelector("#numero").value;
        const operadora = document.querySelector("#operadora").value;
        const valor = parseInt(document.querySelector("#valor").value);

        const resultado = realizarRecarga(numero, operadora, valor);

        resultadoDiv.innerHTML = `
            <p>Recarga realizada com sucesso!</p>
            <p>Número: ${resultado.numero}</p>
            <p>Operadora: ${resultado.operadora}</p>
            <p>Valor: R$${resultado.valor}</p>
            <p>Cashback: R$${resultado.cashback}</p>
        `;
    });

    // Simular o evento submit manualmente
    const submitEvent = new dom.window.Event("submit");
    recargaForm.dispatchEvent(submitEvent);
});
*/
module.exports = { realizarRecarga };
