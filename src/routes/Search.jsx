import React from 'react'
import "../routes/Search.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
    const [chars, setChars] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const recuperarFavoritos = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavoritos(favorites);
    };

    const getChars = async () => {
        try {
          const response = await axios.get(
            "https://gateway.marvel.com/v1/public/characters?ts=1714180616185&apikey=26e39c89d9c09e8e9873d0a1a69c4781&hash=95a977a97a254fda38931954913756f7&nameStartsWith=spider"
          );
          const data = response.data.data.results;      
          setChars(data);
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


  return (
    <div className="card-container">
    {chars.map((char) => (
      <div className="card">
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
              class="bi bi-heart"
              onClick={() => handleFavoriteClick(char)}
              style={{
                display: favoritos.some((f) => f.id === char.id)
                  ? "none"
                  : "flex",
              }}
            ></i>
            <i
              class="bi bi-heart-fill"
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
  )
}

export default Search