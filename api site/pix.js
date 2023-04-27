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

function buscarDadosChave(valorChave) {
	const dados = dadosChaves[valorChave];
	if (dados) {
		console.log(`Nome: ${dados.nome}`);
		console.log(`Banco: ${dados.banco}`);
		console.log(`Agência: ${dados.agencia}`);
		console.log(`Conta: ${dados.conta}`);
		console.log(`Saldo: ${dados.saldo.toFixed(2)}`);
		return dados;
	} else {
		console.log('Chave não encontrada.');
		return null;
	}
}

function realizarTransferencia(valor, saldo) {
	if (isNaN(valor) || valor <= 0) {
		console.log('Valor inválido.');
	} else if (valor > saldo) {
		console.log('Saldo insuficiente.');
	} else {
		console.log(`Transferência de R$${valor.toFixed(2)} realizada com sucesso.`);
		return true;
	}
	return false;
}

module.exports = {
    buscarDadosChave,
    realizarTransferencia
  };
  