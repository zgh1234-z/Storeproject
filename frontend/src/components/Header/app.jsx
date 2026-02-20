import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Header({ search, setSearch }) {
  return (
    <div className="header">
      <Link to="/" className="logo">
        هنرایرانی
      </Link>

      <nav className="nav">
        <ul>
          <li>
            {/* <Link to="/Allproducts"> */}
            <input
              type="search"
              value={search}
              placeholder="جستجوی محصول..."
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* </Link> */}
          </li>
          <li>
            <Link to="/cart">
              {" "}
              <ShoppingCart />
            </Link>
          </li>
          <li>
            <details>
              <summary>محصولات </summary>

              <ul className="ulmenu">
                <li>
                  <Link to="/Allproducts">همه محصولات</Link>
                </li>
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
            <Link to="/contactus">تماس با ما </Link>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          {/* <li> */}
          {/* <Link to="/servic">خدمات</Link> */}
          {/* </li> */}
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
