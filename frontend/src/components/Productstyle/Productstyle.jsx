import React from "react";
import "./Productstyle.css";

function Productstyle({ item }) {
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
    </div>
  );
}

export default Productstyle;
