import "./CardHero.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Spinner from "../shared/Spinner";
import BarraPesquisa from "./BarraPesquisa";
import Favorites from "../routes/Favorites";

const CardHero = () => {
  const [chars, setChars] = useState([]);
  console.log(chars);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChars();
    recuperarFavoritos();
  }, []);

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
      setLoading(true);
    } catch (error) {
      getChars();
    }
  };

  return (
    <>
      <div className="pesquisar">
        <BarraPesquisa onSearch={handleSearch} />
      </div>
      <div className="card-container">
        {!loading && <Spinner />}
        {chars.map((char) => (
          <div className="card" key={char.id}>
            <div className="front">
              <img
                className="card-img-top"
                src={char.thumbnail.path + "." + char.thumbnail.extension}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{char.name}</p>
              </div>
            </div>
            <div className="back">
              <div className="descricao">
                <h3>DESCRIÇÃO</h3>
                <p>{char.description}</p>
              </div>
              <div className="favorite">
                <i
                  className="bi bi-heart"
                  onClick={() => handleFavoriteClick(char)}
                  style={{
                    display: favoritos.some((f) => f.id === char.id)
                      ? "none"
                      : "flex",
                  }}
                ></i>
                <i
                  className="bi bi-heart-fill"
                  onClick={() => handleFavoriteClick(char)}
                  style={{
                    display: favoritos.some((f) => f.id === char.id)
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

export default CardHero;
