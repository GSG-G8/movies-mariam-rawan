import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function ShowMovies() {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => setMovieList(res.data.results))
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {movieList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShowMovies;
