import React from 'react';

export default function MovieItem({ title, year, director, color, handleDeleteMovie }) {
  return <div className='movie-item'
    style={{ backgroundColor: color }}
    onClick={() => handleDeleteMovie(title)}
  >
    <h2>{title}</h2>
    <h3>Released: {year}</h3>
    <h3>Director: {director}</h3>
  </div>;
}
