import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, handleDeleteMovie }) {
  return <div>
    <h2>Your Movies: </h2>
    {
      movies.map((movie, i) =>
        <MovieItem key={movie + i}
          title={movie.title}
          year={movie.year}
          director={movie.director}
          color={movie.color}
          handleDeleteMovie={handleDeleteMovie}
        />
      )
    }
  </div>;
}
