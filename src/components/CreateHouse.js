import React, { useState } from 'react';
import {saveHouse} from '../services/houseService';

const CreateHouse = () => {
  const [house, setHouse] = useState({name: "", description: "", price: 0, image: {}});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", house.name);
    formData.append("description", house.description);
    formData.append("price", house.price);
    formData.append("image", house.image);
    await saveHouse(formData);
  };

  const handleChange = (e) => {
    console.log(house);
    let newHouse;
    if(e.target.name === "image") {
      newHouse = {...house, [e.target.name]: e.target.files[0]};
    }
    else {
      newHouse = {...house, [e.target.name]: e.target.value};
    }
    setHouse(newHouse);
  };
  return (
    <> 
    <div>New house</div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange}/>
      <textarea name="description" onChange={handleChange}/>
      <input type="number" name="price" onChange={handleChange}/>
      <input type="file" name="image" onChange={handleChange}/>
      <button>Save</button>
    </form>
    </>
   );
}
 
export default CreateHouse;