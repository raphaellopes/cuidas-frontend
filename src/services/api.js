import axios from 'axios';

const api = axios.create({
  // @TODO: Create config vars by environment
  baseURL: 'http://localhost:3001',
});

export default api;
