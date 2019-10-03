import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  return (
    <Link path={`/movies/${props.id}`} />
  );
};

export default MovieCard;
