import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">هنرایرانی</div>

      <nav className="nav">
        <ul>
          <li>
            <svg class="icon icon-cart">
              <use xlink:href="#icon-cart"></use>
            </svg>
          </li>
          <li>
            <details open>
              <summary>محصولات </summary>

              <ul className="ulmenu">
                <li>
                  <Link to="/Wood">صنایع چوبی</Link>
                </li>
                <li>
                  <Link to="/فرش">فرش</Link>
                </li>
                <li>
                  <Link to="/مس">مس</Link>
                </li>
                <li>
                  <Link to="/مجسمه سازی">مجسمه سازی</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/servic">خدمات</Link>
          </li>
          <li>
            <Link to="/Login">
              <button>ثبت نام </button>
              <button>ورود</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
