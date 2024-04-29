import React from "react";
import { Heart } from "@phosphor-icons/react";
import axios from "axios";
import Spinner from "../shared/Spinner";
import { useState, useEffect } from "react";

const Favorites = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    const recuperarFavoritos = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setListaFavoritos(favorites);
    };

    recuperarFavoritos();
  }, []);

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
  };
  console.log(listaFavoritos);

  return (
    <div className="card-container">
      {listaFavoritos.map((favorito) => (
        <div className="card">
          <div className="front">
            <img
              className="card-img-top"
              src={favorito.thumbnail.path + "." + favorito.thumbnail.extension}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">{favorito.name}</p>
            </div>
          </div>
          <div className="back">
            <div className="descricao">
              <h3>DESCRIÇÃO</h3>
              <p>{favorito.description}</p>
            </div>
            <div className="favorite">
              <i
                class="bi bi-heart"
                onClick={() => handleFavoriteClick(favorito)}
                style={{
                  display: listaFavoritos.some((f) => f.id === favorito.id)
                    ? "none"
                    : "flex",
                }}
              ></i>
              <i
                class="bi bi-heart-fill"
                onClick={() => handleFavoriteClick(favorito)}
                style={{
                  display: listaFavoritos.some((f) => f.id === favorito.id)
                    ? "flex"
                    : "none",
                }}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
