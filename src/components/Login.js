import React, { useState } from 'react';
import { login } from '../services/authService';
import '../css/auth.css';
import { Link } from 'react-router-dom';

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
    <div className="main-content">
    <div className="form-login bg-white p-5 w-50">
    <form className="mb-4" onSubmit = {handleSubmit}>
      <div className="form-group">
      <input type="text" className="w-100" id="exampleInputEmail1" name="username" placeholder="Email" onChange = {handleChange} value = {credentials.username}/>
      </div>
      <div className="form-group">
      <input type="password" className="w-100" id="Password1" name="password" placeholder="Password" onChange = {handleChange} value = {credentials.password}/>
      </div>
      <div className="form-group">
      <button type="submit" className="btn-primary text-white d-block w-100">Login</button>
      </div>
    </form>
    <Link to="/signup" className="d-block text-center">Sign up</Link>
    </div>
    </div>
   );
}
 
export default Login;