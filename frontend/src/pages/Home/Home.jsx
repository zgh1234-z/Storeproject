import React from "react";
import Header from "../../components/Header/app";
import Slider from "../../components/slider/slider";
import Products from "../../components/Products/Products";
import Arshev from "../../components/Arshev/Arshev";
import Footer from "../../components/Footer/Footer";
import Comment from "../../components/Comment/Comment";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Products />
      <Arshev />
      <Comment />
      <Footer />
    </div>
  );
}

export default Home;
