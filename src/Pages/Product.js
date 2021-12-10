import ProductDetails from "../Components/ProductDetails";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import api from "../services/api.js";
import Loader from "react-loader-spinner";


const Product = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);



    useEffect(() => {
        api.get(`products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => setError(true));
    }, [id])

    useEffect(() => {
        if (product) {
            setLoading(false)
        }
    }, [product]);


    return (
        <>
            <Helmet>
                <title>{`${product.title ? "CTD E-Commerce | " + product.title : "ctd-ecommerce"}`}</title>
            </Helmet>
            {error ?
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">Oops!</h1>
                            <p className="my-2">Esse produto não existe</p>
                            <Link to="/"> Voltar para a home</Link>
                        </div>
                    </div>
                </div>
                :
                loading ?
                    <Loader type="Oval" color="#00BFFF" height={80} width={80} className="text-center" /> :
                     <ProductDetails {...product} />
            }
        </>
);
}
export default Product;