import React from "react";
import "./MoveiList.css";

const MovieThumbnail = ({ title, imageUrl }) => (
  <div className="movie-thumbnail">
    <img src={imageUrl} alt={title} />
    <div className="movie-title">{title}</div>
  </div>
);

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <MovieThumbnail
        key={index}
        title={movie.title}
        imageUrl={movie.imageUrl}
      />
    ))}
  </div>
);

export default MovieList;
