import React from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";
import * as media from "../../mediaBounds";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }

  // TODO: Preload and set the popular movies and movie genres when page loads
  async componentDidMount() {
    const popularMoviesData = await fetcher.getPopularMovies();
    const genresData = await fetcher.getGenres();

    this.setState({
      results: popularMoviesData.results,
      totalCount: popularMoviesData.total_results,
      genreOptions: genresData.genres,
    });
  }

  // TODO: Update search results based on the keyword and year inputs
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.year !== prevState.year
    ) {
      this.fetchNewDataDebounced(this.state.query, this.state.year);
    }
  }

  fetchNewDataDebounced = debounce(
    async (query, year) => await this.fetchNewData(query, year),
    300
  );

  fetchNewData = async (query, year) => {
    const moviesData = this.state.query
      ? await fetcher.getMoviesByQuery(query, year)
      : await fetcher.getPopularMovies();

    this.setState({
      results: moviesData.results,
      totalCount: moviesData.total_results,
    });
  };

  onSearch = (state) => {
    this.setState({ ...state });
  };

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
    } = this.state;

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>{" "}
        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            onSearch={this.onSearch}
          />
        </MovieFilters>
        <TotalCount>{totalCount} results</TotalCount>
        <MovieResults>
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 25px;
  @media (min-width: ${media.mobileBound}) {
    padding: 45px;
  }
`;

const MovieResults = styled.div`
  display: inline-block;
  @media (min-width: ${media.mobileBound}) {
    width: calc(100% - 295px);
  }
`;

const MovieFilters = styled.div`
  margin-top: 15px;
  @media (min-width: ${media.mobileBound}) {
    width: 280px;
    float: right;
  }
`;

const MobilePageTitle = styled.h1`
  position: relative;
  left: 60px;
  top: -8px;
  font-weight: 400;

  @media (min-width: ${media.mobileBound}) {
    display: none;
  }
`;

const TotalCount = styled.strong`
  display: block;
  font-weight: 300;
  font-size: 14px;
`;
