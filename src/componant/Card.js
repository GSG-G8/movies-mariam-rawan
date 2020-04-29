import React from "react";

const Card = (props) => {
  const { item } = props;
  return (
    <div className="movie-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt="movie-img"
        className="movie-container__img"
      />
      <div className="movie-container__information">
        <h2 className="movie-container__title">{item.title}</h2>
        <p className="movie-container__date">{item.overview}</p>
        <p className="movie-container__text">{item.release_date}</p>
        <p className="movie-container__media">{item.media_type}</p>
      </div>
    </div>
  );
};

export default Card;
