import React, { useState } from 'react';

const Login = () => {
  
  const [data, inputChange] = useState({
    username: '',
    password: ''
  })
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    inputChange({
      ...data,
      [name]: value
    });
  };
  
  const handleSubmit = () => {
    fetch('https://localhost:44414/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type={"text"} name={"username"} onChange={handleInputChange}/><br/><br/>
        <label>Password:</label>
        <input type={"text"} name={"password"} onChange={handleInputChange}/><br/><br/>
        <input type={"submit"}/>
      </form>
    </div>
  );
}

export default Login;