import React, { useState, useEffect } from 'react';
import axios from 'axios';

<<<<<<< HEAD

=======
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
      {data.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
>>>>>>> b187fd7d14e3f93123daafca55829031fe708ee8

export default MyComponent;
