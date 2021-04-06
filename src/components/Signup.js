import axios from 'axios';
import React, {useState} from 'react';

const Signup = () => {
  const [user, setUser] = useState({first_name: "", last_name: "", username: "", password: ""});
  
  const handleChange = (e) => {
    const newUser = {...user, [e.target.name]: e.target.value};
    setUser(newUser);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const {data} = await axios.post('http://localhost:3001/users', user);
    localStorage.setItem("token", data.token);
    window.location = "/";
    }
    catch(e) {
      console.log(e);
    }
  }

  return ( 
    <form onSubmit = {handleSubmit}>
      <input type="text" name="first_name"  onChange = {handleChange} value = {user.first_name}/>
      <input type="text" name="last_name" onChange = {handleChange} value = {user.last_name}/>
      <input type="text" name="username" onChange = {handleChange} value = {user.username}/>
      <input type="text" name="password" onChange = {handleChange} value = {user.password}/>
      <button type="submit">Register</button>
    </form>
   );
}
 
export default Signup;