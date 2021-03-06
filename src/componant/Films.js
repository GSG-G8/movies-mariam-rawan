import React, { useState, useEffect } from "react";
import Card from "./Card";
import ShowMovies from "./showFilms";
import axios from "axios";

import "./Films.css";

export default function Films() {
  const [searchFilm, setSearchFilm] = useState("");
  const [searchFilmValue, setSearchFilmValue] = useState([]);
  const [error, setError] = useState(null);

  const handelChange = ({ target: { value } }) => {
    setSearchFilm(value);
  };

  useEffect(() => {
    if (searchFilm.trim()) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=304ac5e762f0abd7fc2c27e96bd42840&query=${searchFilm}
            `
        )
        .then(({ data }) => {
          if (data.total_results) {
            setSearchFilmValue(data.results);
          } else {
            setSearchFilmValue([]);
          }
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setSearchFilmValue("");
    }
  }, [searchFilm]);

  return (
    <div className="main-como-film">
      <h2 style={{ margin: "30px" }}>
        The Place Where You Can Find All Your Favorite Movies
      </h2>
      <input
        className="search-film"
        name="serach"
        placeholder="Enter Film Name "
        value={searchFilm}
        onChange={handelChange}
      />
      <div className="container-film">
        {error ? (
          "error on search"
        ) : searchFilmValue ? (
          searchFilmValue.map((film) => <Card key={film.id} item={film} />)
        ) : (
          <ShowMovies />
        )}
      </div>
    </div>
  );
}
