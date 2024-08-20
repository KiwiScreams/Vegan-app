import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const toggleHeader = () => {
    setHeaderVisible(!headerVisible);
  };
  return (
    <>
      <header>
        <span className="menu" onClick={toggleHeader}>
          lol
        </span>
        <nav
          className={`flex ${headerVisible ? "header-show" : "header-hide"}`}
        >
          <ul className="flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ვეგანური პროდუქცია
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stores"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                მაღაზიები
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
