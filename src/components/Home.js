import React, { useEffect, useState } from 'react';
import {getHouses} from '../services/houseService';

const Home = () => {

  const [houses, setHouses] = useState([]);

  const loadHouses = async () => {
    const myHouses = await getHouses();
    setHouses(myHouses);
  }

  useEffect(() => {
    loadHouses();
  }, []);

  return ( 
    <>
    <div>Home {houses.length}</div>
    <div>
      {houses.map((house) => <div key={house.id}>
        <div>{house.name}</div>
        <div>{house.description}</div>
        <div>{house.price}</div>
        <div><img src={house.image}/></div>
      </div>
      )}
    </div>
    </>
   );
}
 
export default Home;