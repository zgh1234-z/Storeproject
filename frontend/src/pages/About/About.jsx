import React from "react";
import "./About.css";
import Header from "../../components/Header/app";

function About() {
  return (
    <div className="about">
      <Header />
      <div className="Description">
        <p>توضیحات درباره شرکت </p>
        <p>nvfhlsidkjejhfciukelhdflksdhjfkjsdhckjshdkjshfkhdsfkjhsdkjfdjjff</p>
      </div>
      <div className="imgDescription">
        <img src="images/slide1.webp" />
        <img src="images/slide2.webp" />
      </div>
    </div>
  );
}

export default About;
