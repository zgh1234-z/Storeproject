import React from "react";
import "./Allproducts.css";
import Header from "../../components/Header/app";
import Footer from "../../components/Footer/Footer";
import Productstyle from "../../components/Productstyle/Productstyle";
import crop from "../../components/Pageproducts/Pageproducts";

function Allproducts() {
  return (
    <div>
      <Header />
      <h2>همه محصولات </h2>

      <div className="All">
        {crop.map((item) => {
          <Productstyle item={item} />;
        })}
      </div>
      <div className="filter"></div>

      <Footer />
    </div>
  );
}

export default Allproducts;
