import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cuidas.herokuapp.com',
});

export default api;
