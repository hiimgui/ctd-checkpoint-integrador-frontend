import CardProduct from "../Components/Cards";
import { useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Products = () => {
  const { filtro } = useParams();
  return (
    <>
      <Helmet>
      <title>{`${
          filtro ? "CTD E-Commerce | " + filtro : "CTD E-Commerce"
        }`}</title>
      </Helmet>
      <CardProduct />
    </>
  );
};

export default Products;
