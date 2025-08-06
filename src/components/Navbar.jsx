import React from "react";
import "./navbar.css";
import logo from "../logo/forth-logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // ✅ This is correct

  const isInstagramActive =
    location.pathname === "/" || location.pathname.startsWith("/insta");

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="logo">
          <img style={{ width: "130px", height: "35px" }} src={logo} alt="" />
        </div>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={() => (isInstagramActive ? "nav-link active" : "nav-link")}
        >
          Instagram
        </NavLink>

        <NavLink
          to="/linkedow"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          LinkedIn
        </NavLink>

        <NavLink
          to="/pindow"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Pinterest
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
