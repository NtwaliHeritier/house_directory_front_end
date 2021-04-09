import axios from 'axios';

const setJwt = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
}