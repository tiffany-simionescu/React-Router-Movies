import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import MovieCard from './MovieCard.js';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          {/* <MovieDetails key={movie.id} movie={movie} /> */}
          <MovieCard key={movie.id} movie={movie}
               title={movie.title} director={movie.director} 
               metascore={movie.metascore} stars={movie.stars} 
               saveMovie={movie.saveMovie}  />
        </Link>
      ))}
    </div>
  );
}

// function MovieDetails({ movie }) {
//   return (
//     <MovieCard title={movie.title} director={movie.director} 
//                metascore={movie.metascore} stars={movie.stars} 
//                saveMovie={movie.saveMovie}  />
//   );
// }

export default MovieList;
