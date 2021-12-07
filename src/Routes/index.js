import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "../Pages/404";
import Home from "../Pages/Home.js";
<<<<<<< HEAD
import Products from "../Pages/Products"
=======
import Product from "../Pages/Product";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

>>>>>>> a498580e66a10a90005913dbe593d186a1fc7e6c
//Use params
const Routlist = () => {
    return (
  <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD
      <Route path="/Products" element={<Products />} />
=======
      <Route path="product/:id" element={<Product />} />
>>>>>>> a498580e66a10a90005913dbe593d186a1fc7e6c
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    )
};

export default Routlist;


