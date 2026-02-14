import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useCart } from "../../components/CartContext/CartContext.jsx";
import crop from "../../components/Pageproducts/Pageproducts";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = crop.find((p) => p.id === Number(id));

  if (!product) return <p>محصول یافت نشد </p>;

  return (
    <div className="backdrop">
      <img src={product.image} />
      <h2>{product.Name}</h2>
      <p> {product.Description}</p>
      <h4>قیمت : {product.price}</h4>

      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductDetails;
