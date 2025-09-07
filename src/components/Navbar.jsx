import React, {useState} from "react";
import "./navbar.css";
import logo from "../logo/forth-logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const location = useLocation(); // ✅ This is correct

  const isInstagramActive =
    location.pathname === "/" || location.pathname.startsWith("/insta");

      const [isAct,setActive] = useState(false);
  
  const handlerNavbar = () => {
    setActive(!isAct);
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="logo">
          <img style={{ width: "140px", height: "32px" }} src={logo} alt="" />
          <hr className="show_hide" style={{width:"100%",opacity:"0.2"}} />
        </div>
      </div>

      <div className={`nav-links ${isAct ? "" : "res-nav"}`}>
        <NavLink
          to="/"
          className={() => (isInstagramActive ? "nav-link active" : "nav-link")}
           style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FaInstagramSquare /> Instagram Downloader
        </NavLink>

         <NavLink
          to="/facedow"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
           style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FaFacebook /> Facebook Downloader
        </NavLink>

        <NavLink
          to="/linkedow"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
           style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
           <FaLinkedin /> LinkedIn Downloader
        </NavLink>



        <NavLink
          to="/pindow"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
           style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
         <FaSquarePinterest /> Pinterest Downloader
        </NavLink>
      </div>
      <span className="show_hide" style={{fontSize:"19px"}} onClick={handlerNavbar}>{isAct ? <MdOutlineCancel size={40}/> : "More"}</span>
    </nav>
  );
};

export default Navbar;
