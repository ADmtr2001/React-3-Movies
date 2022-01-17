import React, {FC} from 'react';

import {scrollToTop} from "../../utils/scrollToTop";

import {Wrapper} from "./MovieCard.styles";
import {BsSearch} from 'react-icons/bs';

import {IMovie} from "../../types/IMovie";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return (
    <Wrapper to={`/movie/${movie.imdbID}`} onClick={scrollToTop}>
      <div className='image-container'>
        <div className='hover-container'><BsSearch/></div>
        <img src={movie.Poster} alt='film'/>
      </div>
      <div className='description-container'>
        <h3>{movie.Title.length > 50 ? `${movie.Title.slice(0, 50)}...` : movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Wrapper>
  );
};

export default MovieCard;