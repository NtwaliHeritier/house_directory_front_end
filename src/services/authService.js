import http from './httpService';
import {apiUrl} from '../config.json';

http.setJwt(getJwt());

function getJwt() {
  return localStorage.getItem("token");
}

const login = async (credentials) => {
    try {
      const {data} = await http.post(`${apiUrl}/login`, credentials);
      if(data.error) {
        alert(data.error)
      }
      else {
        loginWithJwt(data.token);
        window.location = "/";
      }
      }
      catch(e) {
        console.log(e);
      }
}

const signUp = () => {}

function loginWithJwt(token) {
  localStorage.setItem("token", token);
}

export {login, signUp};