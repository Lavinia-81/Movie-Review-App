import React, {useEffect, useState} from 'react'
import './Movies.css';
import { WatchMovies } from './WatchMovies';


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [allMoviesFiltered, setAllMoviesFiltered] = useState([])
  const [givingRating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchmovies();
    
  }, []);
  const fetchmovies = async () => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY; // ← această linie trebuie să existe aici!
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  const data = await res.json();
  setMovies(data.results);
  setAllMoviesFiltered(data.results);
  setIsLoading(false);
    console.log("Filme primite: ", data.results);
  };

  const handleFilter = (rating) => {
    if (rating == givingRating) { // reset filter if the same rating is clicked again
      setRating(0);
      setMovies(allMoviesFiltered);
    }
    else {
      setRating(rating);
      const filteredMovies = allMoviesFiltered.filter((movie) => movie.vote_average >= rating);
      setMovies(filteredMovies);
    }
  }

  return (
    <section className="movie_list">
      <header className="movieheader">
        <h2 className="center_ele movie_header">Popular Movies</h2>
        <div className="center_ele movie_listadd">
          <ul className="center_ele movie_filter">
            <li className={givingRating===8 ?'movie_filter_item active':'movie_filter_item'} onClick={() => handleFilter(8)}>8+</li>
            <li className={givingRating===7 ?'movie_filter_item active':'movie_filter_item'} onClick={() => handleFilter(7)}>7+</li>
            <li className={givingRating===6 ?'movie_filter_item active':'movie_filter_item'} onClick={() => handleFilter(6)}>6+</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>

        </div>
      </header>
      <div className="movie_shows">

        {movies.length>0 ?(movies.map((movie) => (
          <WatchMovies key={movie.id} movie={movie} />))):
          (<p className='movie_header'>No Movie Found</p>)
        }
      </div>
    </section>
  
  )
}

export default Movies


