import React, { useState, useEffect } from 'react';
import { Movies } from './Movies'

export const MoviesList = () => {
 const [list, setList] = useState([]);

 /* Fetch function that allows us to get the movie titles, images from API */
 const FetchMovies = () => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=e865fc7d6c1eaa875454193ac1851471&language=en-US&page=1')
  console.log('hej funkar denna')
   .then((response) => response.json())
   .then((data) => {
    setList(data.results)
   })
 }
 /* A call back function - this useEffect hook awakens the FetchMovies function above */
 useEffect(() => {
  FetchMovies()
 }, [])

 /* This return shows the img, titles, rdate & the id on our HTML page */
 return (
  <main>
   {list.map((Movies) => (
    <div className="movie-container">
     <Movies
      title={Movies.title}
      releaseDate={Movies.release_date}
      movieId={Movies.id}
      poster={Movies.poster_path} />
    </div>
   ))}
  </main>
 )
}
