import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="src\assets\marvel-header.png"></img>
      </div>

      <div className="menu">
        <p>
          <a href="/">Heróis</a>
        </p>
        <p>
          <a href="/favorites">Favoritos</a>
        </p>
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
