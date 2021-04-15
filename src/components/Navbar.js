import React from 'react';
import { useHistory } from 'react-router';

const Navbar = ({username}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/newHouse");
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  return ( 
    <>
    <nav>Hello everyone {username}</nav>
    <div><button onClick={handleClick}>NEW</button></div>
    {localStorage.getItem("token")&&<div><button onClick={logout}>LOGOUT</button></div>}
    </>
   );
}
 
export default Navbar;