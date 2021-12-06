import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";

import api from "../../services/api.js";

import { Link } from "react-router-dom";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles.scss";

export const Carousel = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: function (i) {
      return <div className="dots-simbol"></div>;
    },
  };

  const getRandomItens = (items, number) => {
    items.sort(function () {
      return 0.5 - Math.random();
    });
    return items.slice(0, number);
  };

  return (
    <Container fluid="md">
      <div className="mt-4 mb-1 d-flex flex-row align-items-center bd-highlight text-uppercase fw-bold ">
        <h3 className="flex-fill text-center">Destaques</h3>
        <Link to="/" className="align-self-end  me-3">
          Ver todas ofertas
        </Link>
      </div>

      <Slider {...settings}>
        {getRandomItens(data, 9).map((product) => (
          <CardCarousel key={product.id} {...product} />
        ))}
      </Slider>
    </Container>
  );
};

const CardCarousel = ({ title, price, category, description, image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body className="flex-fill">
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <Card.Subtitle as="h3">
          <span>{"R$ " + price.toString()}</span>
          <Button variant="outline-primary" size="sm">
            Saiba mais
          </Button>
        </Card.Subtitle>
      </Card.Body>
      <Button variant="primary" className="text-uppercase">
        <FaShoppingCart className="me-2" /> Comprar
      </Button>
    </Card>
  );
};

function NextArrow({ currentSlide, slideCount, ...props }) {
  return <FaChevronRight {...props} />;
}

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return <FaChevronLeft {...props} />;
}
