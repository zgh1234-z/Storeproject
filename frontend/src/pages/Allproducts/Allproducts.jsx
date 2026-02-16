import React, { useState } from "react";
import "./Allproducts.css";
import Header from "../../components/Header/app";
import Footer from "../../components/Footer/Footer";
import Productstyle from "../../components/Productstyle/Productstyle";
import crop from "../../components/Pageproducts/Pageproducts";

function Allproducts() {
  const [selectedCategory, setSelectedCategory] = useState([]);

  let filter;

  if (selectedCategory === "all") {
    filter = products;
  } else {
    filter = products.filter((item) => item.category === selectedCategory);
  }

  return (
    <div>
      <Header />
      <h2>همه محصولات </h2>

      <input type="checkbox" name="چوبی" />

      <div className="All">
        {crop.map((item) => (
          <Productstyle item={item} />
        ))}
      </div>
      <div className="filter">
        <input type="cheackbox"> چوبی </input>
        <input type="cheackbox"> فرش </input>
        <input type="cheackbox"> مسی </input>
        <input type="cheackbox"> مجسمه سازی </input>
      </div>

      <Footer />
    </div>
  );
}

export default Allproducts;
