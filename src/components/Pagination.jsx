import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Pagination.css";

const Pagination = () => {
  const [chars, setChars] = useState([]);
  const getChars = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?ts=1714180616185&apikey=26e39c89d9c09e8e9873d0a1a69c4781&hash=95a977a97a254fda38931954913756f7"
      );
      const data = response.data.data.results;
      setChars(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div className="navConteiner">
      <nav aria-label="navPag">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link"><i class="bi bi-arrow-left"></i></a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="bi bi-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
