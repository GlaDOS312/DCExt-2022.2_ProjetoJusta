import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const name = "João"
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }
 
 const url = "https://placeholder.com/150"

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
