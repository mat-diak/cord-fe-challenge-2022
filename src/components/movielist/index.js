import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

export default function MovieList({ movies, genres }) {
  return (
    <MoviesWrapper id="discover_movie_list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} genres={genres} />
      ))}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div``;
