import { useState, useEffect } from "react";
import api from "../../Api/api";
const CardProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return;
};
export default CardProduct;
