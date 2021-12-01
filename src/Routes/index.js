import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../Pages/404";
import Home from "../Pages/Home";
//Use params
const RouteList = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>;
};

export default RouteList;
