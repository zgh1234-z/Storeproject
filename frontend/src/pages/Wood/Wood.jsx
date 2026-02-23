import React, { useState } from "react";

import "./Wood.css";
import Header from "../../components/Header/app";
import Footer from "../../components/Footer/Footer";
import Productstyle from "../../components/Productstyle/Productstyle";
import crop from "../../components/Pageproducts/Pageproducts";

function Wood() {
  return (
    <>
      <Header />
      <h1>صنایع دستی چوبی</h1>

      <div className="wood">
        {crop
          .filter((item) => item.category === "wood")
          .map((item) => (
            <Productstyle key={item.id} item={item} />
          ))}
      </div>

      <Footer />
    </>
  );
}

export default Wood;
