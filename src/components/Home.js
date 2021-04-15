import React, { useEffect, useState } from 'react';
import {getHouses} from '../services/houseService';
import '../css/house.css';

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
    <div className="bg-light">
    <div className="house-containers d-flex">
      {houses.map(house => 
        <div key={house.id} className="house-container">
          <img src={house.image} alt=""/>
          <div className="img-description d-flex">
            <div className="ratings d-flex">
              <span className="font-weight-bold">{house.name}</span>
              <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></span>
            </div>
            <div className="house-price d-flex">
              <span className="font-weight-bold">{house.price}</span>
              <span>per Month</span>
            </div>
          </div>
          <button>DETAILS</button>
        </div>
        )}
    </div>
    </div>
   );
}
 
export default Home;