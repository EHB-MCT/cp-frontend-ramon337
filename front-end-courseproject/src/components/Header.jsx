import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="../Er_was_eens_Logo.png" alt="Er was eens logo" />
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/making-of" className={({ isActive }) => (isActive ? "active" : "")}>
                Making-Of
              </NavLink>
            </li>
          </ul>
        </nav>
        <form className="search-bar">
          <input type="text" placeholder="Search for a topic" />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
