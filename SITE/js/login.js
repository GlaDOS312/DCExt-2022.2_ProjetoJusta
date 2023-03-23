function entrar(){
  const url = "http://localhost:5500/api"
  let user = document.querySelector('#cnpj')
  let userLabel = document.querySelector('#CNPJLabel')
  
  let password = document.querySelector('#password')
  let passwordLabel = document.querySelector('#passwordLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    cnpj: '',
    sobrenome: '',
    email: '',
    senha: ''
  }
  
  function getUser(){
    axios.get(url)
    .then(response => {
      listaUser = response.data.users
      listaUser.forEach((item) => {
        if(user.value == item.cnpjCad && password.value == item.senhaCad){
          userValid = {
            nome: item.nomeCad,
            sobrenome: item.sobrenomeCad,
            cnpj: item.cnpjCad,
            senha: item.senhaCad
          }
        }
      })
      // Verifica se o usuário é válido aqui, após a atribuição
      if(user.value == userValid.cnpj && password.value == userValid.senha){
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
  }

  getUser()
}
