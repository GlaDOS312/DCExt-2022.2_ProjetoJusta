function entrar(){
  const url = "http://localhost:5500/api"
  let user = document.querySelector('#cnpj')
  let userLabel = document.querySelector('#cnpjLabel')
  
  let password = document.querySelector('#senha')
  let passwordLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    cnpj: '',
    sobrenome: '',
    email: '',
    senha: '',
    saldo:'',
    agencia:'',
    conta:''
  }
  
  function getUser(){
    axios.get(url)
    .then(response => {
      listaUser = response.data.users
      listaUser.forEach((item) => {
        if(user.value == item.cnpj && password.value == item.senha){
          userValid = {
            nome: item.nome,
            sobrenome: item.sobrenome,
            cnpj: item.cnpj,
            email: item.email,
            senha: item.senha,
            saldo: item.saldo,
            agencia: item.agencia,
            conta: item.conta
          }
        }
      })
      // Verifica se o usuário é válido aqui, após a atribuição
      if(userValid.cnpj === user.value && userValid.senha === password.value){
        localStorage.setItem('userLogado', JSON.stringify(userValid))
        window.location.href = 'logado.html'
        
        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom
        
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
      } 
      else {
        userLabel.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        passwordLabel.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'CNPJ ou senha incorretos'
        cnpj.focus()
      }
    })
     .catch(error => {
      console.log(error)
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Não foi possível acessar a API de usuários'
    })
  }
  getUser()
}

function sair(){
    localStorage.removeItem('token')
    localStorafe.removeItem('userLogado')
    alert("Redirecionando para a tela de login")
    window.location.href = 'login.html'
}
