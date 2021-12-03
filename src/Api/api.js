import axios from "axios";
import { useState, useEffect } from "react";

const Data = () => {
  const axios = require("axios");
  const api = axios.create(process.env.BASE_URL);
  // const api = axios.create(
  //   `http://ec2-18-206-40-162.compute-1.amazonaws.com:8080/`
  // );
  const [responseData, setResponseData] = useState([]);
  const data = () => {
    console.log("oi");
    api
      .get(`/products/categories`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  data();
  // get(rota`)
  //           .then(response => {
  //               console.log(response.data);
  //           })
  //           .catch(error => {
  //               console.log(error);
  //           });
};
export default Data;
