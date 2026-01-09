import React from "react";

function Arshev() {
  return (
    <div className>
      <div className="card">
        <Link to="/چوبی">
          <img src="./public/images/icon.png " alt="چوبی" />
        </Link>
      </div>
      <div className="card">
        <Link to="/مسی">
          <img src="./public/images/icon.png " alt="مسی" />
        </Link>
      </div>
      <div className="card">
        <Link to="/فرش">
          <img src="./public/images/icon.png " alt="فرش" />
        </Link>
      </div>
      <div className="card">
        <Link to="/مجسمه سازی">
          <img src="./public/images/icon.png " alt="جسمه سازی" />
        </Link>
      </div>
    </div>
  );
}

export default Arshev;
