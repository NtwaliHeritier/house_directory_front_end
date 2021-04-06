import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({username: "", password: ""});

  const handleChange = (e) => {
    const newcredentials = {...credentials, [e.target.name]: e.target.value};
    setCredentials(newcredentials);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:3001/login', credentials);
      console.log(data.token);
      }
      catch(e) {
        console.log(e);
      }
  }

  return ( 
    <form onSubmit = {handleSubmit}>
      <input type="text" name="username" onChange = {handleChange} value = {credentials.username}/>
      <input type="text" name="password" onChange = {handleChange} value = {credentials.password}/>
      <button type="submit">Login</button>
    </form>
   );
}
 
export default Login;