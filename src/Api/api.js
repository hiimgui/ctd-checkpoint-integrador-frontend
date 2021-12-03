import axios from "axios";
const api = axios.create({
  baseUrl: "ec2-52-90-57-174.compute-1.amazonaws.com:8080",
});

export default api;
