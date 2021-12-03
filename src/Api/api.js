import axios from "axios";
import { useState, useEffect } from "react";

const Data = () => {
  const axios = require("axios");
  const api = axios.create(process.env.BASE_URL);
  // const api = axios.create(
  //   `http://ec2-18-206-40-162.compute-1.amazonaws.com:8080/`
  // );
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    api
      .get(`${api}/products/categories`)
      .then((res) => setResponseData(res.data))
      .catch((err) => console.log(err));
  }, [api]);

  return <>{console.log(responseData)}</>;
};
export default Data;
