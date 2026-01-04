import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MySite</div>

      <nav className="nav">
        <ul>
          <li>
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="/about">درباره ما</a>
          </li>
          <li>
            <a href="/services">خدمات</a>
          </li>
          <li>
            <a href="/contact">تماس</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
