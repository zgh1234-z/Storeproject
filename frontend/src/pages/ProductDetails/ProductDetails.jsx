import React from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="backdrop" onClick={onclose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} />
        <h2>{product.Name}</h2>
        <p> {product.Description}</p>
        <h4>قیمت : {product.price}</h4>
        <button
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
        >
          افزودن به سبد خرید
        </button>
        <button className="close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
