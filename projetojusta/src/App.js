import './App.css';

function App() {
  const name = "João"
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = "https://placeholder.com/150"

  return (
    <div className="App">
      <h>Olá Mundo</h>
      <p>Olá, {newName}.</p> 
      <p>A soma é {sum(1,8)}</p>
      <img src ={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
