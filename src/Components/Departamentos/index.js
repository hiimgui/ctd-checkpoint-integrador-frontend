import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import api from "../../services/api.js";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

import "./styles.scss";

const Departamentos = () => {

    const [categorias, setCategorias] = useState({});


    useEffect(() => {
        api
            .get(`products`)
            .then((response) => {
                const dados = response.data.reduce((acc, product) => {
                    const { category } = product;
                    acc[category] = acc[category] || {};
                    acc[category]['products'] = acc[category]['products'] || [];
                    acc[category].products.push(product);
                    return acc
                }, {});
                setCategorias(dados);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const settings = {
        className: "departamentos-slider",
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3500,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
    };

    return (

        Object.keys(categorias).map((categoria) =>
            <Container fluid="lg" className="my-3" key={categoria}>
                <div className="mt-4 mb-1 d-flex flex-row align-items-center text-uppercase fw-bold ">
                    <h4 className="flex-fill fw-bold text-secondary">{categoria}</h4>
                </div>

                <Slider {...settings}>
                    {categorias[categoria].products.map((product) => <CardDepartamentos  key={product.id} {...product} />
                    )}
                </Slider>
                
                <Link to={`/Products/${categoria}`} className="btn btn-outline-primary d-inline-block">
                    Ver mais
                </Link>
            </Container>
        )
        /*   <div>oi</div> */

    )
};

const CardDepartamentos = ({ id, title, price, description, image }) => {

    return (
        <Link to={`/product/${id}`}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body className="flex-fill d-flex flex-column justify-content-between">
                    <Card.Title className="text-center">{title}</Card.Title>
                    <div>
                        <Card.Text className="text-muted">{description}</Card.Text>
                        <Card.Subtitle as="h3">
                            <span>{new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            }).format(price)}
                            </span>
                        </Card.Subtitle>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default Departamentos;