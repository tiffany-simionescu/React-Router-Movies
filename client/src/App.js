import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList.js';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={(props) => <MovieList addToSavedList={addToSavedList} {...props} />} />
      <Route path="/movies/:id" render={(props) => <Movie addToSavedList={addToSavedList} {...props} />} />
    </div>
  );
};

export default App;
