import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "../Pages/404";
import Home from "../Pages/Home.js";
import Products from "../Pages/Products"
//Use params
const Routlist = () => {
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
    )
};

export default Routlist;


