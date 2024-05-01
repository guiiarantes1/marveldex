import React, { useState, useEffect } from "react";
import "../components/CardHero.css"

const CardHero = ({ chars, favoritos, handleFavoriteClick }) => {
  return (
    <div className="card-container">
      {chars.map((char) => (
        <div className="card" key={char.id}>
          <div className="front">
            <div className="card-img">
            <img
              className="char-img"
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt="Card image cap"
            />
            </div>
     
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
  );
};

export default CardHero;