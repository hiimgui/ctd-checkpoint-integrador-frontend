
import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://ec2-184-72-170-163.compute-1.amazonaws.com:8080"
=======
  baseURL: process.env.REACT_APP_API_URL
>>>>>>> 1aa7ef2f9e3f42785fd4fcce3948899a1c9b4101
});

export default api;
