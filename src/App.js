import './App.css';
import { useState, useEffect } from 'react';
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
  const [movieFormColor, setMovieFormColor] = useState('lightgreen');
  const [query, setQuery] = useState('');

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

    //add immutably to all goblins array
    setAllMovies([...allMovies, newMovie]);    
  }

  function handleDeleteMovie(title) {
    // find the index of the movie in allMovies with this title
    const index = allMovies.findIndex(movie => movie.title === title);

    //use splice to delete the movie at this index
    allMovies.splice(index, 1);

    //update the allGoblins array immutably
    setAllMovies([...allMovies]);
  }

  useEffect(() => {
    //filter the movies
    const filteredMovies = allMovies.filter((movie) => 
      movie.title.includes(query)
    );

    setFilteredMovies(filteredMovies);
  
  }, [query, allMovies]);
  

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
        <div className='filter'>
          Filter:
          <input
            onChange={(e)=> setQuery(e.target.value)}
          ></input>
        </div>
        <MovieList
          movies={
            // if there are movies in the filteredMovies array pass those, if not pass allMovies
            filteredMovies.length
              ? filteredMovies
              : allMovies
          }
          handleDeleteMovie={handleDeleteMovie}
        />

      </div>


    </div>
  );
}

export default App;
