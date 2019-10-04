import React from 'react';

const MovieCard = ( props ) => {
  // const { title, director, metascore, stars } = movie;
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
        {(!props.stars)
          ? <div>Loading Stars...</div> 
          : props.stars.map(star => (
            <div key={star} className="movie-star">
                  {star}
              </div>
        ))}
      </div>
  );
};

export default MovieCard;
