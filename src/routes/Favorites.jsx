import React from "react";
import { useState, useEffect } from "react";
import "../routes/Favorites.css";
import CardHero from "../components/CardHero";
import BarraPesquisa from "../components/BarraPesquisa";
import ErrorSearch from "../shared/ErrorSearch";
import Pagination from "../components/Pagination";

const Favorites = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const [favoritosFiltrados, setfavoritosFiltrados] = useState([]);
  const [emptySearch, setEmptySearch] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  
  const favoritesPerPage = 10;
  const indexOfLastFavorite = currentPage * favoritesPerPage;
  const indexOfFirstFavorite = indexOfLastFavorite - favoritesPerPage;
  const currentFavorites = favoritosFiltrados.slice(
    indexOfFirstFavorite,
    indexOfLastFavorite
  );

  const totalPages = Math.ceil(favoritosFiltrados.length / favoritesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    setEmptySearch(true);
  };

  useEffect(() => {
    recuperarFavoritos();
  }, []);
  return (
    <div className="main">
      <BarraPesquisa onSearch={handleSearch} />
      {!emptySearch ? (
        <ErrorSearch />
      ) : (
        <CardHero
          chars={currentFavorites}
          favoritos={listaFavoritos}
          handleFavoriteClick={handleFavoriteClick}
        />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Favorites;
