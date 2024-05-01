import React, { useState, useEffect, Suspense } from "react";
import CardHero from "../components/CardHero";
import "../routes/Home.css";
import axios from "axios";
import Pagination from "../components/Pagination";
import Spinner from "../shared/Spinner";
import BarraPesquisa from "../components/BarraPesquisa";

const Home = () => {
  const [chars, setChars] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const apiBase =
    "https://gateway.marvel.com/v1/public/characters?ts=1714180616185&apikey=26e39c89d9c09e8e9873d0a1a69c4781&hash=95a977a97a254fda38931954913756f7";

  const recuperarFavoritos = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritos(favorites);
  };

  const getChars = async () => {
    try {
      const response = await axios.get(apiBase);
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
    } catch (error) {
      getChars();
    }
  };

  useEffect(() => {
    getChars();
    recuperarFavoritos();
  }, []);

  return (
    <div className="main">
      <BarraPesquisa onSearch={handleSearch} />
      {loading ? ( // Renderiza o Spinner se o estado de loading for verdadeiro
        <Spinner />
      ) : (
        <Suspense fallback={<Spinner />}>
          <CardHero
            chars={chars}
            favoritos={favoritos}
            handleFavoriteClick={handleFavoriteClick}
          />
        </Suspense>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
