import React from "react";
import { useState, useEffect } from "react";
import "../routes/Favorites.css";
import CardHero from "../components/CardHero";
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
    <div className="main">
      <BarraPesquisa onSearch={handleSearch} />
      <CardHero
        chars={favoritosFiltrados}
        favoritos={listaFavoritos}
        handleFavoriteClick={handleFavoriteClick}
      />
    </div>
  );
};

export default Favorites;
