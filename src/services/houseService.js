import http from './httpService';
import {apiUrl} from '../config.json';

export function getHouses() {
  return http.get(`${apiUrl}/houses`)
}