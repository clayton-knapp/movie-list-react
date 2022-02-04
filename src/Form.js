import React from 'react';

export default function Form({ movieFormTitle, setMovieFormTitle, movieFormYear, setMovieFormYear, movieFormDirector, setMovieFormDirector, movieFormColor, setMovieFormColor, handleSubmit }) {
  return <form className='form'
    onSubmit={handleSubmit}
  >
    <h2>Enter a Movie!</h2>
    <label>
      Title: 
      <input
        required
        value={movieFormTitle}
        onChange={(e)=> 
          setMovieFormTitle(e.target.value)
        }
      ></input>
    </label>
    <label>
      Year: 
      <input
        required
        value={movieFormYear}
        onChange={(e)=> 
          setMovieFormYear(e.target.value)
        }
      ></input>
    </label>
    <label>
      Director: 
      <input
        required
        value={movieFormDirector}
        onChange={(e)=> 
          setMovieFormDirector(e.target.value)
        }
      ></input>
    </label>
    <label>
      Set Color: 
      <select
        value={movieFormColor}
        onChange={(e)=> 
          setMovieFormColor(e.target.value)
        }
      >
        <option value='lightgreen'>Green</option>
        <option value='lightblue'>Blue</option>
        <option value='orange'>Orange</option>
        <option value='tan'>Tan</option>
      </select>
    </label>
    <button>Submit</button>
  </form>;
}
