import React from "react";
import "./Arshev.css";
import { Link } from "react-router-dom";

function Arshev() {
  return (
    <div className="arshev">
      <div className="A">
        <Link to="/Wood">
          <img src="./public/images/icon.png " alt="چوبی" />
        </Link>
      </div>
      <div className="A">
        <Link to="/مسی">
          <img src="./public/images/icon.png " alt="مسی" />
        </Link>
      </div>
      <div className="A">
        <Link to="/فرش">
          <img src="./public/images/icon.png " alt="فرش" />
        </Link>
      </div>
      <div className="A">
        <Link to="/مجسمه سازی">
          <img src="./public/images/icon.png " alt="جسمه سازی" />
        </Link>
      </div>
    </div>
  );
}

export default Arshev;
