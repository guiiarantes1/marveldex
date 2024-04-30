import { useState, useEffect, Suspense } from "react";
import CardHero from "../components/CardHero";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import "../routes/Home.css";
import axios from "axios";
import Pagination from "../components/Pagination";
import Spinner from "../shared/Spinner";
import BarraPesquisa from "../components/BarraPesquisa";

const Home = () => {
  const [chars, setChars] = useState([]);
  console.log(chars);
  const [favoritos, setFavoritos] = useState([]);
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
    } catch (error) {
      console.log(error);
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
    try {
      const response = await axios.get(
        `${apiBase}&nameStartsWith=${searchValue}`
      );
      const data = response.data.data.results;
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
      <Suspense fallback={<Spinner/>}>
      <CardHero
        chars={chars}
        favoritos={favoritos}
        handleFavoriteClick={handleFavoriteClick}
      />
      </Suspense>
     
      <Pagination />
    </div>
  );
};

export default Home;
