import axios from 'axios';
import React, { useState } from 'react';
import { login } from '../services/authService';

const Login = () => {
  const [credentials, setCredentials] = useState({username: "", password: ""});

  const handleChange = (e) => {
    const newcredentials = {...credentials, [e.target.name]: e.target.value};
    setCredentials(newcredentials);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
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