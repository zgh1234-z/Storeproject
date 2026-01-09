import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">هنرایرانی</div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/Product">محصولات</Link>
            <div className="menu">
              <ul>
                <li>صنایع چوب </li>
                <li> فرش</li>
                <li>مس</li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/servic">خدمات</Link>
          </li>
          <li>
            <Link to="/">تماس با ما </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
