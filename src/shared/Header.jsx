import React from "react";
import "./Header.css";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" ><img src="/images/marvel-header.png"></img></a>
      </div>
      <div className="menu">
        <NavBar/>
      </div>
      <nav className="espacamento">
       
      </nav>
    </div>
  );
};

export default Header;
