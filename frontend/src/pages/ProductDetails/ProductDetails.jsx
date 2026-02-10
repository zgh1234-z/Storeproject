import React from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onClose, onAddToCart }) {
  return (
    <div className="backdrop">
      <img src={product.image} />
      <h2>{product.Name}</h2>
      <p> {product.Description}</p>
      <h4>قیمت : {product.price}</h4>

      <button
        onClick={() => {
          onAddToCart(product);
          // onClose();
        }}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductDetails;
