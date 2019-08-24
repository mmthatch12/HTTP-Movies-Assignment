import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie'
import axios from "axios";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
        console.log('res.data from useEffect app.js', res.data)
        setMovie(res.data)})
      .catch(err => console.log(err.response))
  }, [])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };



  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" 
        render={props => {
          return <MovieList {...props} movie={movie} setMovie={setMovie} />
        }}
        />

      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} movie={movie} setMovie={setMovie} />;
        }}
      />
       <Route path='/update-movie/:id'
        render={props => {
          return <UpdateMovie {...props} movie={movie} setMovie={setMovie}  />
        }}
      />
    </>
  );
};

export default App;
