import React from "react";
import { useCart } from "../../components/CartContext/CartContext";
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
            <h3>{item.img}</h3>

            <button onClick={() => removeFromCart(index)}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
