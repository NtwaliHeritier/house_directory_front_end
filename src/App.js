import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    try {
      const {username} = jwtDecode(localStorage.getItem("token"))
      setUsername(username);
    }
    catch(e) {}
  }, []);

  return (
    <>
    {username && <Navbar username = {username}/>}
    <Switch>
      {!username && 
      <>
      <Route path="/login" component = {Login}/>
      <Route path="/signup" component = {Signup}/>
      </>}
      {username && <Route path="/" component={Home}/>}
    </Switch>
    </>
  );
}

export default App;
