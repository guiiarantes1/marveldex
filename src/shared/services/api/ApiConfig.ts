import axios from "axios";
import { useState, useEffect } from "react";

export const Api = () => {
  const [chars, setChars] = useState([]);
  let characters = [];
  const getChars = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?ts=1714180616185&apikey=26e39c89d9c09e8e9873d0a1a69c4781&hash=95a977a97a254fda38931954913756f7"
      );
      const data = response.data.data.results;

      setChars(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChars();
  }, []);

};
