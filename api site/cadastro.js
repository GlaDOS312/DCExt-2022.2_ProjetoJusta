let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

// declaração das variaveis necessárias

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobreNome = document.querySelector('#labelSobreNome')
let validSobreNome = false

let cnpj = document.querySelector('#cnpj')
let labelCNPJ = document.querySelector('#labelCNPJ')
let validCNPJ = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let saldo = document.querySelector('#saldo')
let labelSaldo = document.querySelector('#labelSaldo')

let agencia = document.querySelector('#agencia')
let labelAgencia = document.querySelector('#labelAgencia')

let conta = document.querySelector('#conta')
let labelConta = document.querySelector('#labelConta')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// minimo de caracteres para cada campo

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

sobrenome.addEventListener('keyup', () => {
  if(sobrenome.value.length <= 2){
    labelSobreNome.setAttribute('style', 'color: red')
    labelSobreNome.innerHTML = 'Sobrenome *Insira no minimo 3 caracteres'
    sobrenome.setAttribute('style', 'border-color: red')
    validSobreNome = false
  } else {
    labelSobreNome.setAttribute('style', 'color: green')
    labelSobreNome.innerHTML = 'Sobrenome'
    sobrenome.setAttribute('style', 'border-color: green')
    validSobreNome = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.length <= 4){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'E-mail *Insira no minimo 5 caracteres'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

// salva os dados em um array no localstorage

function cadastro(){
    const url = "http://localhost:5500/api";
  if(validNome && validSobreNome && validEmail && validSenha && validConfirmSenha){
    //let listaUsers = JSON.parse(localStorage.getItem('listaUsers') || '[]')
    
    var listaUsers ={
      nomeCad: nome.value,
      cnpjCad: cnpj.value,
      sobrenomeCad: sobrenome.value,
      emailCad: email.value,
      senhaCad: senha.value,
      saldoCad: saldo.value,
      agenciaCad: agencia.value,
      contaCad: conta.value
    }
    

    function newuser(){
      axios.post(url, listaUsers)
      .then(response => {
          console.log("USER CADASTRADO");
      })
      .catch(error => error)
  }

 newuser()
    
    localStorage.setItem('listaUsers', JSON.stringify(listaUsers))
    
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'login.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
