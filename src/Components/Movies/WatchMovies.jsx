import React from 'react';
import './WatchMovie.css';
import PropTypes from 'prop-types';


export const WatchMovies = ({ movie }) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank"
      className='movie_show'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className='movie_img' alt="moviedetails" />
      <div className="movie_details">
        <h3 className="movie_details_h3">{movie.original_title}</h3>
        <div className="centre_ele moviedate">

          <p>{movie.release_date}</p>
          <p>{movie.vote_average} <img className="emoji_class" alt="rating_icons" src="https://icon-library.com/images/rating-star-icon-png/rating-star-icon-png-8.jpg" /></p>

        </div>
        <p className="moviedesc">{movie.overview.slice(0, 100) + "."}</p>
      </div>
    </a>
  )
};

WatchMovies.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string

  }).isRequired
}

 
