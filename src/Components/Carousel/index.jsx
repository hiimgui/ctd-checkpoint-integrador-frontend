import React from 'react';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import { Link } from "react-router-dom";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles.scss";


export const Carousel = () => {


    const settings = {
        className: "carousel",
        dots: false,
        infinite: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        centerMode: true,
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
    };

    return (
        <Container>
            <Slider {...settings}>
                <CardCarousel />
                <CardCarousel />
                <CardCarousel />
                <CardCarousel />
                <CardCarousel />
                <CardCarousel />
            </Slider>
            <Link className="btn btn-outline-primary me-3" to="/">Ver todas ofertas</Link>

        </Container>
    );
}


const CardCarousel = () => {
    return (
        <Card>
            <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=12NX2yLf1N6MweJk7JD3Iw09ktOJrFTCb" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

function NextArrow({ currentSlide, slideCount, ...props }){
    return (
    <FaChevronCircleLeft {...props} />
    );
}

function PrevArrow({ currentSlide, slideCount, ...props }){
    return (
    <FaChevronCircleRight {...props} />
    );
}
