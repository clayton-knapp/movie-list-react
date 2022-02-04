import React from 'react';

export default function MovieItem({ movieFormTitle, movieFormYear, movieFormDirector, movieFormColor }) {
  return <div className='movie-item'
    style={{ backgroundColor: movieFormColor }}
  >
    <h2>{movieFormTitle}</h2>
    <h3>Released: {movieFormYear}</h3>
    <h3>Director: {movieFormDirector}</h3>
  </div>;
}
