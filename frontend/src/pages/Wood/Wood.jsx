import React, { useState } from "react";
import { useCart } from "../../components/CartContext/CartContext";
import "./Wood.css";
import Header from "../../components/Header/app";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";

const crop = [
  {
    id: 1,
    Name: "محصول 1",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 2,
    Name: "محصول 2",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 3,
    Name: "محصول 3",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 4,
    Name: "محصول 4",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 5,
    Name: "محصول 5",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 6,
    Name: "محصول 6",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 7,
    Name: "محصول 7",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
  {
    id: 8,
    Name: "محصول 8",
    Description: "توضیحات",
    price: 10000,
    image: "/images/download-4.webp",
  },
];

function Wood() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  return (
    <div className="c">
      <Header />
      <h1>صنایع دستی چوبی</h1>
      <div className="ch">
        {crop.map((item) => (
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
        ))}
      </div>
      <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <Footer />
    </div>
  );
}

export default Wood;
