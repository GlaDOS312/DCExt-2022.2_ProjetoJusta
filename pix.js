const dadosChaves = {
	'01417176458': {
		nome: 'Lucas Ribeiro',
		banco: 'NU Pagamentos',
		agencia: '1234-5',
		conta: '12345-6',
		saldo: 1000
	},
	'09810788428': {
		nome: 'Weslley Mattheus dos Santos',
		banco: 'Banco Itaú',
		agencia: '5678-9',
		conta: '56789-0',
		saldo: 2000
	},
	'81992701429': {
		nome: 'Mariana Barros Lino',
		banco: 'Banco Santander',
		agencia: '2468-0',
		conta: '24680-1',
		saldo: 500
	},
	'jbjj@ecomp.poli.br': {
		nome: 'Joabe Jesus Bezerra',
		banco: 'Banco Inter',
		agencia: '1357-9',
		conta: '13579-0',
		saldo: 1500
	},
	'chave-aleatoria': {
		nome: 'Sandrs Araujo',
		banco: 'Banco do Brasil',
		agencia: '0001-0',
		conta: '00000-1',
		saldo: 5000
	}
};

function exibirCampoChave() {
	const tipoChave = document.getElementById('tipo-chave').value;
	if (tipoChave !== '') {
		document.getElementById('campo-chave').style.display = 'block';
	} else {
		document.getElementById('campo-chave').style.display = 'none';
	}
}

function buscarDadosChave() {
	const valorChave = document.getElementById('valor-chave').value;
	const dados = dadosChaves[valorChave];
	if (dados) {
		document.getElementById('nome').textContent = dados.nome;
		document.getElementById('banco').textContent = dados.banco;
		document.getElementById('agencia').textContent = dados.agencia;
		document.getElementById('conta').textContent = dados.conta;
		document.getElementById('saldo').textContent = dados.saldo.toFixed(2);
		document.getElementById('dados-chave').style.display = 'block';
		document.getElementById('campo-chave').style.display = 'none';
		document.getElementById('transferencia').style.display = 'block';
	} else {
		alert('Chave não encontrada.');
	}
}

function realizarTransferencia() {
	const valor = parseFloat(document.getElementById('valor').value);
	const saldo = parseFloat(document.getElementById('saldo').textContent);
	if (isNaN(valor) || valor <= 0) {
		alert('Valor inválido.');
	} else if (valor > saldo) {
		alert('Saldo insuficiente.');
	} else {
		alert(`Transferência de R$${valor.toFixed(2)} realizada com sucesso.`);
		document.getElementById('valor').value = '';
		document.getElementById('dados-chave').style.display = 'none';
		document.getElementById('transferencia').style.display = 'none';
	}
}

  