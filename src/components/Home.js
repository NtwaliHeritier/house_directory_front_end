import axios from 'axios';
import React, { useEffect } from 'react';

const Home = () => {
  const getUsers = async () => {
    await axios.get("https://localhost:3001/houses");
  }

  useEffect(() => {
  }, [])
  return ( 
    <div>Home</div>
   );
}
 
export default Home;