import axios from "axios";


const Api = axios.create({
  baseUrl: "http://ec2-184-72-170-163.compute-1.amazonaws.com:8080",
});


export default Api;