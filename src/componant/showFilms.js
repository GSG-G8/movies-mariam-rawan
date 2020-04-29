import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function ShowMovies() {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435")
      .then(({ data: { results } }) =>{
        setMovieList(results)
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="container-film">
      {error?<div>error on get data</div> :movieList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShowMovies;
