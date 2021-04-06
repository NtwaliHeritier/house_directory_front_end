import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const history = useHistory();

  const handleChange = (e) => {
    const newcredentials = {...credentials, [e.target.name]: e.target.value};
    setCredentials(newcredentials);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:3001/login', credentials);
      if(data.error) {
        alert(data.error)
      }
      else {
        localStorage.setItem("token", data.token);
        history.push("/");
      }
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