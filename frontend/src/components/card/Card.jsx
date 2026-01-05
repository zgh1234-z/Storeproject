import React from "react";

function Card() {
  const Cards = [
    {
      id: 1,
      title: "فرش ماشینی کرامتیان بلوچی A زمینه لاکی",
      price: 12000000,
      image: "frontend/public/images/download (1).webp",
    },
    {
      id: 2,
      title: "فرش ماشینی دنیای فرش مدل روشنک سنتی ",
      price: 35000000,
      image: "frontend/public/images/download (2).webp",
    },
    {
      id: 3,
      title: "فرش ماشینی دنیای فرش مدل غوغا سنتی ",
      price: 2500000,
      image: "frontend/public/images/download (3).webp",
    },
    {
      id: 4,
      title: "فرش ماشینی دنیای فرش مدل گیشه سنتی ",
      price: 2500000,
      image: "frontend/public/images/download (4).webp",
    },
    {
      id: 5,
      title: "فرش ماشینی دنیای فرش مدل جیران ",
      price: 2500000,
      image: "frontend/public/images/download (5).webp",
    },
  ];

  return (
    <div>
      {Cards.map((id, title, price, image) => (
        <div key={id}>
          <h1>{title}</h1>
          <img src={image} alt="img" />
          <h4>{price}</h4>
        </div>
      ))}
    </div>
  );
}
export default Card;
