import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../Pages/404";
import Home from "../Pages/Home.js";
import Products from "../Pages/Products";
import Product from "../Pages/Product";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Cart from "../Pages/Cart";
import AboutUs from "../Components/About/About";

const Routlist = () => {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:filtro" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/Sobre" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default Routlist;
