import React from "react";
import './Card.css'

const Card = (props) => {
  const { item:{poster_path,title,overview,release_date,media_type} } = props;
  return (
    <div className="movie-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="movie-img"
        className="movie-container__img"
      />
      <div className="movie-container__information">
        <h2 className="movie-container__title">{title}</h2>
        <p className="movie-container__date">{overview}</p>
        <p className="movie-container__text">{release_date}</p>
        <p className="movie-container__media">{media_type}</p>
      </div>
    </div>
  );
};

export default Card;
