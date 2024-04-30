import React from "react";
import "./BarraPesquisa.css";

import { useState, useEffect } from "react";

const BarraPesquisa = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <nav className="navbar navbar-light">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Pesquise seu herói..."
          aria-label="Search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Pesquisar
        </button>
      </form>
    </nav>
  );
};

export default BarraPesquisa;
