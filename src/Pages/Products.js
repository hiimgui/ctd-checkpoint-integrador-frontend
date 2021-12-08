import CardProduct from "../Components/Cards";
<<<<<<< HEAD
=======
import { useParams } from "react-router";
import Helmet from "react-helmet";
>>>>>>> 1aa7ef2f9e3f42785fd4fcce3948899a1c9b4101
const Products = () => {
  const { filtro } = useParams();
  return (
    <>
      <Helmet>
        <title>{`${
          filtro ? "CTD E-Commerce | " + filtro : "ctd-ecommerce"
        }`}</title>
      </Helmet>
      <CardProduct />
    </>
  );
};

export default Products;
