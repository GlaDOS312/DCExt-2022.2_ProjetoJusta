const recargaForm = document.querySelector("#recarga-form");
const resultadoDiv = document.querySelector("#resultado");

recargaForm.addEventListener("submit", function(event) {
	event.preventDefault();

	const numero = document.querySelector("#numero").value;
	const operadora = document.querySelector("#operadora").value;
	const valor = parseInt(document.querySelector("#valor").value);

	realizarRecarga(numero, operadora, valor);
});

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

	resultadoDiv.innerHTML = `
		<p>Recarga realizada com sucesso!</p>
		<p>Número: ${numero}</p>
		<p>Operadora: ${operadora}</p>
		<p>Valor: R$${valor.toFixed(2)}</p>
		<p>Cashback: R$${cashback.toFixed(2)}</p>
	`;
}
