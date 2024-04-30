import React from "react";
import "./BarraPesquisa.css";
const BarraPesquisa = () => {
  return (
    <nav className="navbar navbar-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Pesquise seu herói..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Pesquisar
        </button>
      </form>
    </nav>
  );
};

export default BarraPesquisa;
