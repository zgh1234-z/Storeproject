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
            <Link to="/about">درباره ما</Link>
            {/* <a href="/about">درباره ما</a> */}
          </li>
          <li>
            <Link to="/servic">خدمات</Link>
            {/* <a href="/services">خدمات</a> */}
          </li>
          <li>
            <Link to="/">تماس با ما </Link>
            {/* <a href="/contact">تماس</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
