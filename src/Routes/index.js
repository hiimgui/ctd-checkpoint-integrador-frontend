import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "../Pages/404";
import Home from "../Pages/Home.js";
//Use params
const Routlist = () => {
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
    )
};

export default Routlist;


