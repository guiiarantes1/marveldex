import React, { useState, useEffect } from "react";
import CardHero from "../components/CardHero";
import "../routes/Home.css";
import axios from "axios";
import Pagination from "../components/Pagination";
import Spinner from "../shared/Spinner";
import BarraPesquisa from "../components/BarraPesquisa";
import ErrorSearch from "../shared/ErrorSearch";

const Home = () => {
  const [chars, setChars] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [emptySearch, setEmptySearch] = useState(true);
  const apiBase =
    "https://gateway.marvel.com/v1/public/characters?ts=1714180616185&apikey=26e39c89d9c09e8e9873d0a1a69c4781&hash=95a977a97a254fda38931954913756f7";

  const recuperarFavoritos = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritos(favorites);
  };

  const getChars = async () => {
    try {
      const response = await axios.get(
        `${apiBase}&offset=${(currentPage - 1) * 20}`
      );
      const data = response.data.data.results;
      setChars(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFavoriteClick = (char) => {
    let favorites = [...favoritos];

    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === char.id
    );

    if (alreadyFavorite) {
      favorites = favorites.filter((favorite) => favorite.id !== char.id);
    } else {
      favorites.push(char);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoritos(favorites);
  };

  const handleSearch = async (searchValue) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiBase}&nameStartsWith=${searchValue}`
      );
      const data = response.data.data.results;
      setLoading(false);
      setChars(data);
      setEmptySearch(true);
    } catch (error) {
      getChars();
      setEmptySearch(false);
    }
  };

  useEffect(() => {
    getChars();
    recuperarFavoritos();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main">
      <BarraPesquisa onSearch={handleSearch} />
      {!emptySearch ? (
        <ErrorSearch />
      ) : loading ? (
        <Spinner />
      ) : (
        <CardHero
          chars={chars}
          favoritos={favoritos}
          handleFavoriteClick={handleFavoriteClick}
        />
      )}

      <Pagination
        totalPages={100}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
