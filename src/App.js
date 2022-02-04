import './App.css';
import { useState } from 'react';
import Form from './Form';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function App() {
  // tracks state for allMovies, filteredMovies, movieFormYear, movieFormDirector, movieTitle, movieFormColor
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  //FUNCTIONS
  function handleSubmit(e) {
    e.preventDefault();

    //create a movie object with current state
    const newMovie = {
      title: movieFormTitle,
      year: movieFormYear,
      director: movieFormDirector,
      color: movieFormColor
    };

    //add immutable to all goblins array
    setAllMovies([...allMovies, newMovie]);    
  }

  return (
    <div className="App">
      <div className='top'>
        <Form
          movieFormTitle={movieFormTitle}
          setMovieFormTitle={setMovieFormTitle}
          movieFormYear={movieFormYear}
          setMovieFormYear={setMovieFormYear}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor}
          handleSubmit={handleSubmit}
        />
        <MovieItem
          title={movieFormTitle}
          year={movieFormYear}
          director={movieFormDirector}
          color={movieFormColor}
        />
      </div>
      <div className='bottom'>
        <MovieList
          movies={
            // if there are movies in the filteredMovies array pass those, if not pass allMovies
            filteredMovies.length
              ? filteredMovies
              : allMovies
          }
        />

      </div>


    </div>
  );
}

export default App;
