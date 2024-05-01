import React from "react";
import "./Header.css";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" ><img src="/images/marvel-header.png"></img></a>
      </div>
      <div className="menu">
        <NavBar/>
      </div>
      <nav className="navbar navbar-light">
       
      </nav>
    </div>
  );
};

export default Header;
