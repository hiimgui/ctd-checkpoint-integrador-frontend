import axios from "axios";
const api = axios.create(process.env.BASE_URL);

export default api;
