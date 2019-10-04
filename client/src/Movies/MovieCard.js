import React from 'react';

const MovieCard = props => {
  return (
    <div className="movie-card">
    <h2>{props.title}</h2>
    <div className="movie-director">
      Director: <em>{props.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{props.metascore}</strong>
    </div>
    <h3>Actors</h3>
        <p className="movie-star">{props.stars}</p>
        {props.stars.map(item =>
            <div key={item} className="movie-star">{item}</div>
          )}
      </div>
  );
};

export default MovieCard;
