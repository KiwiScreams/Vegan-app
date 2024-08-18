import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <nav>
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
