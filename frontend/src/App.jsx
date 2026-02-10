import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Servic from "./pages/Servic/Servic";
import Login from "./pages/Login/Login";
import Wood from "./pages/Wood/Wood";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Servic" element={<Servic />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Wood" element={<Wood />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
