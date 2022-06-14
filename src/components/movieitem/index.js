import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import { getSmImgUrl } from "../../fetcher";

import posterTemplate from "../../images/poster-template.jpeg";

export default function MovieItem({ movie, genres }) {
  const mappedGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genreObj) => genreObj.name);

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <PosterImage
          src={getSmImgUrl(movie.poster_path)}
          alt={"Poster of" + movie.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = posterTemplate;
          }}
        />
      </LeftCont>
      <RightCont>
        <Header>
          <div>
            {/* TITLE */}
            <Title>{movie.title}</Title>
            {/* RATING */}
            <Rating>{movie.vote_average}</Rating>
          </div>
          {/* GENRES */}
          <Genres>{mappedGenres.join(" | ")}</Genres>
        </Header>
        {/* OVERVIEW */}
        <Overview>{movie.overview}</Overview>
        {/* DATE */}
        <Date>{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

const Rating = styled.div`
  background-color: ${colors.primaryColor};
  color: ${colors.white};
  padding: 0.1em 0.2em;
  border-radius: 5px;
`;

const smallText = styled.div`
  font-size: 14px;
  color: ${colors.primaryColor};
`;

const Date = styled(smallText)`
  font-weight: 300;
  vertical-align: baseline;
`;

const Genres = styled(smallText)`
  font-weight: 700;
`;

const Overview = styled.p`
  margin: 0;
  padding: 0;
`;

const PosterImage = styled.img`
  height: 250px;
`;

const Header = styled.div`
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const MovieItemWrapper = styled.article`
  /* position: relative; */
  display: flex;

  gap: 20px;

  background-color: ${colors.white};
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.4;
  font-weight: 800;
  margin: 0 1em 0.3em 0;
`;
