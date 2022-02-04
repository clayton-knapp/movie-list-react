import React from 'react';

export default function MovieItem({ id, title, year, director, color, handleDeleteMovie }) {
  return <div className='movie-item'
    style={{ backgroundColor: color }}
    //on Click run handleDeleteMovie passing in this movie's title
    onClick={() => handleDeleteMovie(id)}
  >
    <h2>{title}</h2>
    <h3>Released: {year}</h3>
    <h3>Director: {director}</h3>
  </div>;
}
