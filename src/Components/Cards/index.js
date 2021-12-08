import "./styles.scss";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import api from "../../services/api";
import { Link } from "react-router-dom";
const CardProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(`/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="filtros">
        <button>VIDEO</button>
        <button>Informatica</button>
        <button>Smartphones</button>
        <button>Conectividade</button>
        <button>Áudio</button>
        <button>Periféricos</button>
      </div>
      <Container className="grid" fluid>
        {data.map((product) => {
          return (
            <Link to = {`/product/${product.id}`} className="cardDiv" key={product.id}>
              <h6>{product.category}</h6>
              <img src={product.image} alt="produto-img" />
              <h4>{product.title}</h4>
              <p>{product.description} </p>
              <span>R$ {product.price},00</span>
            </Link>
          );
        })}
      </Container>

      <h1> Pagina de produtos vai ter mtos cards aqui</h1>
    </>
  );
};
export default CardProduct;
