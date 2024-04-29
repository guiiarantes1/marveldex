import React from "react";
import "./Header.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={`/`} ><img src="https://github.com/lucascb/snake-cljs/assets/81725311/924a5bc6-f1ae-41ef-bd9e-498311642e04"></img></Link>
      </div>
      <div className="menu">
        <NavBar/>
      </div>
      <nav className="navbar navbar-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Pesquise seu herói..."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Pesquisar
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
