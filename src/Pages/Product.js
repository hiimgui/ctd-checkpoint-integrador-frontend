import ProductDetails from "../Components/ProductDetails";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import api from "../services/api.js";


const Product = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);


    useEffect(() => {
        api.get(`products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err));
    }, [id])


    return (
    <>
        <Helmet>
        <title>{`${product.title ? "CTD E-Commerce | " + product.title : "ctd-ecommerce"}`}</title>
    </Helmet>

    <ProductDetails {...product} />
    </>);
}

export default Product;