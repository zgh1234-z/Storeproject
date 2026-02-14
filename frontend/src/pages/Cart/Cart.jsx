import React from "react";
import { useCart } from "../../components/CartContext/CartContext";
import Productstyle from "../../components/Productstyle/Productstyle";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h1>سبدخرید</h1>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است </p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <Productstyle item={item} />

            <button onClick={() => removeFromCart(index)}>حذف</button>
          </div>
        ))
      )}
      <div className="buy">
        <button>پرداخت </button>
      </div>
    </div>
  );
}

export default Cart;
