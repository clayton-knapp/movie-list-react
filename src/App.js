import './App.css';
import { useState } from 'react';
import Form from './Form';

function App() {
  // tracks state for allMovies, filteredMovies, movieFormYear, movieFormDirector, movieTitle, movieFormColor
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');



  return (
    <div className="App">
      <Form
        movieFormTitle={movieFormTitle}
        setMovieFormTitle={setMovieFormTitle}
        movieFormYear={movieFormYear}
        setMovieFormYear={setMovieFormYear}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormColor={movieFormColor}
        setMovieFormColor={setMovieFormColor}
      />

    </div>
  );
}

export default App;
