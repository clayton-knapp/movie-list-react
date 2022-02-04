import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, handleDeleteMovie }) {
  return <div>
    <h2>Your Movies: </h2>
    <div className='movie-list'>
      {
        movies.map((movie, i) =>
          <MovieItem key={movie + i}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            color={movie.color}
            handleDeleteMovie={handleDeleteMovie}
          />
        )
      }
    </div>
  </div>;
}
