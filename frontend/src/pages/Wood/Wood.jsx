import React, { useState } from "react";
import { useCart } from "../../components/CartContext/CartContext";
import "./Wood.css";
import Header from "../../components/Header/app";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";
import Productstyle from "../../components/Productstyle/Productstyle";
import crop from "../Pageproducts/Pageproducts";
import Productstyle from "../../components/Productstyle/Productstyle";

function Wood() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { addToCart } = useCart();

  return (
    <div className="wood">
      <Header />

      <h1>صنایع دستی چوبی</h1>

      <div className="w">
        {crop.map((item) => (
          <Productstyle item={item} />
        ))}
      </div>

      <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct([])}
        onAddToCart={addToCart}
      />

      <Footer />
    </div>
  );
}

export default Wood;
