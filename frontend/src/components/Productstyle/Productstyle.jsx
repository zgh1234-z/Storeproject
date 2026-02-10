import React, { useState } from "react";
import "./Productstyle.css";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import { useCart } from "../../components/CartContext/CartContext";

function Productstyle({ item }) {
  const [selectedProduct, setSelectedProduct] = useState(false);

  const { addToCart } = useCart();

  return (
    <div className="ch">
      <div
        key={item.id}
        className="product"
        onClick={() => setSelectedProduct(item)}
      >
        <img src={item.image} alt={item.Name} />
        <h3>{item.Name}</h3>
        <p>{item.Description}</p>
        <p>{item.price}تومان </p>
      </div>
      {/* <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct([])}
        onAddToCart={addToCart}
      /> */}
    </div>
  );
}

export default Productstyle;
