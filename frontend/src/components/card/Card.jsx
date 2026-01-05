import React from "react";
import "./Card.css";

function Card({ title, image, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-price">{price}</p>
    </div>
  );
}

export default Card;
