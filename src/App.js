import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function App() {
  // tracks state for allMovies, filteredMovies, movieFormYear, movieFormDirector, movieTitle, movieFormColor
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightgreen');
  const [query, setQuery] = useState('');
  const [id, setId] = useState(0);

  //FUNCTIONS
  function handleSubmit(e) {
    e.preventDefault();

    //create a movie object with current state
    const newMovie = {
      id: id,
      title: movieFormTitle,
      year: movieFormYear,
      director: movieFormDirector,
      color: movieFormColor
    };

    //add immutably to all goblins array
    setAllMovies([...allMovies, newMovie]);   
    
    //reset the state to reset form inputs
    setMovieFormTitle('');
    setMovieFormYear('');
    setMovieFormDirector('');
    setMovieFormColor('lightgreen');

    //increment id for next time move is added
    setId(id + 1);
  }

  function handleDeleteMovie(id) {
    // find the index of the movie in allMovies with this title
    const index = allMovies.findIndex(movie => movie.id === id);

    //use splice to delete the movie at this index - mutates the array but ok because we update state on next line
    allMovies.splice(index, 1);

    //update the allGoblins array immutably
    setAllMovies([...allMovies]);
  }

  function handleFilterMovie() {
    //filter the movies, only add ones to array with title that includes
    const tempFilteredMovies = allMovies.filter((movie) => 
      movie.title.includes(query)
    );
    
    //
    setFilteredMovies(tempFilteredMovies);
  }

  useEffect(handleFilterMovie, [query, allMovies]);
  

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
      <div className='filter'>
          Filter:
        <input
          onChange={(e)=> setQuery(e.target.value)}
        ></input>
      </div>
      <div className='bottom'>
        <MovieList
          movies={
            // if there are movies in the filteredMovies array pass those, if not pass allMovies
            filteredMovies
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
