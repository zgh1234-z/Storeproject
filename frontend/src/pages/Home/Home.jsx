import React from "react";
import Header from "../../components/Header/app";
import Slider from "../../components/slider/slider";
import Prodcts from "../../components/Products/Products";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Prodcts />
    </div>
  );
}

export default Home;
