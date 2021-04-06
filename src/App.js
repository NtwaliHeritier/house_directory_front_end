import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Switch>
      <Route path="/login" component = {Login}/>
      <Route path="/signup" component = {Signup}/>
      <Route path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;
