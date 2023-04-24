function validarFormulario() {
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var telefone = document.getElementById("telefone").value;
	var senha = document.getElementById("senha").value;
	var cnpj = document.getElementById("cnpj").value;
	var dataNascimento = document.getElementById("data-nascimento").value;
	var enderecoRua = document.getElementById("endereco-rua").value;
	var enderecoBairro = document.getElementById("endereco-bairro").value;
	var enderecoCidade = document.getElementById("endereco-cidade").value;
	var enderecoEstado = document.getElementById("endereco-estado").value;
	var enderecoCep = document.getElementById("endereco-cep").value;

	// nome válido = (apenas letras e espaços)
	var nomeValido = /^[a-zA-Z\s]+$/.test(nome);
	if(!nomeValido) {
		alert("Nome inválido. Por favor, digite apenas letras e espaços.");
		return false;
	}

	var emailValido = /\S+@\S+\.\S+/.test(email);
	if(!emailValido) {
		alert("Email inválido. Por favor, digite um email válido.");
		return false;
	}

	//telefone válido = (apenas números e traços)
	var telefoneValido = /^\d{2}-\d{4}-\d{4}$/.test(telefone);
	if(!telefoneValido) {
		alert("Telefone inválido. Por favor, digite um telefone no formato XX-XXXX-XXXX.");
		return false;
	}

	//senha valida = (pelo menos 8 caracteres)
	if(senha.length < 8) {
		alert("Senha inválida. Por favor, digite uma senha com pelo menos 8 caracteres.");
		return false;
	}

	//CNPJ válido = (apenas números)
	var cnpjValido = /^\d{14}$/.test(cnpj);
	if(!cnpjValido) {
		alert("CNPJ inválido. Por favor, digite um CNPJ válido contendo apenas números.");
		return false;
	}

	var dataNascimentoValida = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(dataNascimento);
	if(!dataNascimentoValida) {
		alert("Data de nascimento inválida. Por favor, digite uma data no formato AAAA-MM-DD.");
		return false;
	}

	//endereço válido = (apenas letras, números, espaços e vírgulas)
	var enderecoValido = /^[a-zA-Z0-9\s,]+$/.test(enderecoRua) && /^[a-zA-Z0-9\s,]+$/.test(enderecoBairro) && /^[a-zA-Z\s]+$/.test(enderecoCidade) && /^[a-zA-Z\s]+$/.test(enderecoEstado) && /^\d{5}-\d{3}$/.test(enderecoCep);
    if(!enderecoValido) {
    alert("Endereço inválido. Por favor, verifique se os campos de endereço foram preenchidos corretamente.");
    return false;
}

	alert ("Cadastro concluido com sucesso! Agora você é um herói JUSTA");
}

