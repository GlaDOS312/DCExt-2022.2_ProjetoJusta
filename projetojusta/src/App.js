import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  function sum(a,b){
    return a + b
  }

  const url = "https://placeholder.com/150"

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  )
}
