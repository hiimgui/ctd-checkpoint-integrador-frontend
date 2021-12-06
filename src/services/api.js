
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-184-72-170-163.compute-1.amazonaws.com:8080'
});

export default api;