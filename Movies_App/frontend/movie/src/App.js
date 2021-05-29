import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0145f93fa4225b4ffcfcf44ce5ed7ac7";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=0145f93fa4225b4ffcfcf44ce5ed7ac7";

function App() {
  const[ movies, setMovies ] = useState([]);

  useEffect(()=>{
    fetch(FEATURED_API).then( res => res.json())
    .then( data=>{
      console.log(data);
      setMovies(data.results);
    })
    }, [])
  return (
    <div className="app">
      
    <header>
      <input className="search" type="text" placeholder="search..." />
    </header>
    <div className="movie-container">
        { movies.length > 0 && movies.map( (movie)=>
             <Movie key={movie.id} {...movie}></Movie>
        )}
    </div>
    </div>
  );
}

export default App;
