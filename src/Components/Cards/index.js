import "./styles.scss";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import api from "../../services/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CardProduct = () => {
  const { filtro } = useParams();
  const [data, setData] = useState([]);
  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api
      .get(`/products${filtro ? `/category/${filtro}` : ""}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filtro]);
  useEffect(() => {
    api
      .get(`/products/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container  className="filtros" >
        <Link className="btn btn-link btn-primary mx-1 my-3 fw-bold" to={`/Products`}>
          Todos
        </Link>
        {categories.map((category) => (
          <Link
            className="btn btn-primary mx-1 my-3"
            to={`/Products/${category}`}
          >
            {category}
          </Link>
        ))}
      </Container>
      <Container className="grid" fluid>
        {data.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className="cardDiv"
              key={product.id}
            >
              <h6>{product.category}</h6>
              <img
                className="products-img"
                src={product.image}
                alt="produto-img"
              />
              <h4 fw-bold>{product.title}</h4>
              <p>{product.description} </p>
              <span>{new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}</span>
            </Link>
          );
        })}
      </Container>
    </>
  );
};
export default CardProduct;
