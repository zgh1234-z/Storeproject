import React, { useState } from "react";
import "./Allproducts.css";
import Header from "../../components/Header/app";
import Footer from "../../components/Footer/Footer";
import Productstyle from "../../components/Productstyle/Productstyle";
import crop from "../../components/Pageproducts/Pageproducts";

function Allproducts({ search }) {
  const [selectedCategory, setSelectedCategory] = useState([]);

  let filteredproducts;

  if (selectedCategory.length === 0) {
    filteredproducts = crop;
  } else {
    filteredproducts = crop.filter((item) =>
      selectedCategory.includes(item.category),
    );
  }

  const searchbox = filteredproducts.filter((item) =>
    (item.title || "").toLowerCase().includes(search.toLowerCase()),
  );

  function Checkbox(category) {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  }

  return (
    <div>
      <h2>همه محصولات </h2>

      <div className="K">
        <div className="filter">
          <input
            type="checkbox"
            checked={selectedCategory.includes("wood")}
            onChange={() => Checkbox("wood")}
          />
          لوازم چوبی
          <input
            type="checkbox"
            checked={selectedCategory.includes("copper")}
            onChange={() => Checkbox("copper")}
          />
          لوازم مسی
          <input
            type="checkbox"
            checked={selectedCategory.includes("carpet")}
            onChange={() => Checkbox("carpet")}
          />
          فرش
          <input
            type="checkbox"
            checked={selectedCategory.includes("statue")}
            onChange={() => Checkbox("statue")}
          />
          مجسمه سازی
        </div>

        <div className="All">
          {searchbox.length > 0 ? (
            searchbox.map((item) => <Productstyle key={item.id} item={item} />)
          ) : (
            <p className="no-product">محصولی با این مشخصات پیدا نشد</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Allproducts;
