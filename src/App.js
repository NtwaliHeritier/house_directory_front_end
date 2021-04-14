import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import CreateHouse from './components/CreateHouse';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const user = jwtDecode(localStorage.getItem("token"))
      setUser(user);
    }
    catch(e) {}
  }, []);

  return (
    <>
    {user.user_id && <Navbar username = {user.username}/>}
    <Switch>
      <Route path="/login" component = {Login}/>
      <Route path="/signup" component = {Signup}/>
      <Route path="/newHouse" component = {CreateHouse} user_id={user.user_id}/>
      <Route path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;
