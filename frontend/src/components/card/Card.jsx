import React from "react";
import "./Card.css";

function Card(title, image, price) {
  return (
    <div className="card-container">
      <div>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
}
export default Card;
