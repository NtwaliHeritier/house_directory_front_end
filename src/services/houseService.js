import http from './httpService';
import {apiUrl} from '../config.json';

const getHouses = async () => {
  const {data} = await http.get(`${apiUrl}/houses`);
  return data;
}

const saveHouse = async (house) => {
  await http.post(`${apiUrl}/houses`, house);
}

export {getHouses, saveHouse};