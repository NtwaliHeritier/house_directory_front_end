import React from 'react';
import { useHistory } from 'react-router';

const Navbar = ({username}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/newHouse");
  }
  return ( 
    <>
    <nav>Hello everyone {username}</nav>
    <div><button onClick={handleClick}>NEW</button></div>
    </>
   );
}
 
export default Navbar;