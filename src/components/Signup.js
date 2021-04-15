import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

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
    <div className="main-content">
    <div className="form-login bg-white p-5 w-50">
      <form className="mb-4" onSubmit = {handleSubmit}>
        <div className="form-group">
          <input type="text" name="first_name" className="w-100" placeholder = "First name"  onChange = {handleChange} value = {user.first_name}/>
        </div>
        <div className="form-group">  
          <input type="text" name="last_name" className="w-100" placeholder = "Last name" onChange = {handleChange} value = {user.last_name}/>
        </div>
        <div className="form-group">    
          <input type="text" name="username" className="w-100" placeholder = "Username" onChange = {handleChange} value = {user.username}/>
        </div>
        <div className="form-group">  
          <input type="text" name="password" className="w-100" placeholder = "Password" onChange = {handleChange} value = {user.password}/>
        </div>
        <div className="form-group"> 
          <button type="submit" className="btn-primary text-white d-block w-100">Register</button>
        </div>
      </form>
      <Link to="/login" className="d-block text-center">LOGIN</Link>
    </div>
    </div>
   );
}
 
export default Signup;