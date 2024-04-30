import React from "react";
import { useState, useEffect } from "react";
import "../routes/Favorites.css";

import BarraPesquisa from "../components/BarraPesquisa";

const Favorites = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const [favoritosFiltrados, setfavoritosFiltrados] = useState([]);

  const recuperarFavoritos = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setListaFavoritos(favorites);
    setfavoritosFiltrados(favorites);
  };

  const handleFavoriteClick = (char) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === char.id
    );

    if (alreadyFavorite) {
      favorites = favorites.filter((favorite) => favorite.id !== char.id);
    } else {
      favorites.push(char);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setListaFavoritos(favorites);
    setfavoritosFiltrados(favorites);
  };

  const handleSearch = (searchValue) => {
    const filtered = listaFavoritos.filter((favorite) =>
      favorite.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setfavoritosFiltrados(filtered);
  };

  useEffect(() => {
    recuperarFavoritos();
  }, []);
  return (
    <>
      <div className="pesquisar">
        <BarraPesquisa onSearch={handleSearch} />
      </div>
      <div className="card-container">
        {favoritosFiltrados.map((favorite) => (
          <div className="card" key={favorite.id}>
            <div className="front">
              <img
                className="card-img-top"
                src={
                  favorite.thumbnail.path + "." + favorite.thumbnail.extension
                }
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{favorite.name}</p>
              </div>
            </div>
            <div className="back">
              <div className="descricao">
                <h3>DESCRIÇÃO</h3>
                <p>{favorite.description}</p>
              </div>
              <div className="favorite">
                <i
                  className="bi bi-heart"
                  onClick={() => handleFavoriteClick(favorite)}
                  style={{
                    display: listaFavoritos.some((f) => f.id === favorite.id)
                      ? "none"
                      : "flex",
                  }}
                ></i>
                <i
                  className="bi bi-heart-fill"
                  onClick={() => handleFavoriteClick(favorite)}
                  style={{
                    display: listaFavoritos.some((f) => f.id === favorite.id)
                      ? "flex"
                      : "none",
                  }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
