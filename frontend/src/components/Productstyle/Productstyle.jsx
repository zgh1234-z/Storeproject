import React, { useState } from "react";
import "./Productstyle.css";
import { Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";

function Productstyle({ item }) {
  return (
    <div className="ch">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.Name} />
        <h3>{item.title}</h3>
        <p>{item.Description}</p>
        <br></br>
        <h4>{item.price}تومان </h4>
      </Link>
    </div>
  );
}

export default Productstyle;
