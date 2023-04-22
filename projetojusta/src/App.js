function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/api')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
}
