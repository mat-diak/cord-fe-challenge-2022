import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as media from "../../mediaBounds";
import { getSmImgUrl } from "../../fetcher";

import posterTemplate from "../../images/poster-template.jpeg";

export default function MovieItem({ movie, genres }) {
  const mappedGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genreObj) => genreObj.name);

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <GradienOverlay />
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
        <Body>
          <Header>
            <div>
              <Title>{movie.title}</Title>
              <Rating>{Number(movie.vote_average).toFixed(1)}</Rating>
            </div>
            <Genres>{mappedGenres.join(" | ")}</Genres>
          </Header>
          <Overview>{movie.overview}</Overview>
        </Body>
        <Date>{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.article`
  position: relative;
  height: 160px;
  display: flex;

  gap: 20px;

  background-color: ${colors.white};
  padding: 20px;
  margin: 15px 0;

  @media (min-width: ${media.mobileBound}) {
    height: 250px;
  }
`;

// LEFT CONTAINER

const LeftCont = styled.div`
  display: inline-block;
`;

const PosterImage = styled.img`
  object-fit: cover;
  height: 160px;
  width: calc((160 * 2 / 3) px);

  @media (min-width: ${media.mobileBound}) {
    height: 250px;
    width: calc((250 * 2 / 3) px);
  }
`;

// RIGHT CONTAINER

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Body = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 1.2em;

  font-weight: 800;
  margin: 0 1em 0 0;

  @media (min-width: ${media.mobileBound}) {
    font-size: 1.4em;
  }
`;

const smallText = styled.div`
  color: ${colors.primaryColor};
  font-size: 0.7em;

  @media (min-width: ${media.mobileBound}) {
    font-size: 0.8em;
  }
`;

const Genres = styled(smallText)`
  margin: 0.3em 0 0.6em 0;
  font-weight: 700;
`;

const Date = styled(smallText)`
  font-weight: 300;
`;

const Rating = styled.div`
  background-color: ${colors.primaryColor};
  color: ${colors.white};
  padding: 0.18em 0.25em;
  border-radius: 5px;
`;

const Overview = styled.p`
  font-size: 0.9em;

  margin: 0;
  padding-top: 0.4em;

  overflow: hidden;

  @media (min-width: ${media.mobileBound}) {
    padding-top: 0.4em;
  }
`;

const GradienOverlay = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: -20px 0 0 -20px;
  background-color: white;
  border-radius: 0 0 5px 0;
  z-index: 5;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    150deg,
    transparent 70%,
    rgba(255, 255, 255, 1) 90%
  );

  @media (min-width: ${media.mobileBound}) {
    display: none;
  } ;
`;
