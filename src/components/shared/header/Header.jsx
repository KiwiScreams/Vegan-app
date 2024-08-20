import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const toggleHeader = () => {
    setHeaderVisible(!headerVisible);
  };
  const [menuClass, setMenuClass] = useState("");
  const handleMenuClick = () => {
    setMenuClass(menuClass === "" ? "change" : "");
  };
  return (
    <>
      <header>
        <div className={`menu ${menuClass}`} onClick={handleMenuClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
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
