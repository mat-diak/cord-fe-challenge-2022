import axios from "axios";

// [theMovieDB]: <https://www.themoviedb.org/documentation/api>
// [popularMovies]: <https://developers.themoviedb.org/3/movies/get-popular-movies>
// [movieGenres]: <https://developers.themoviedb.org/3/genres/get-movie-list>
// [searchMovies]: <https://developers.themoviedb.org/3/search/search-movies>

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const getPopularMovies = async () => {
  const endPoint = "/movie/popular";
  const language = "&language=en-US&page=1";
  const page = `&page=1`;
  const API_KEY = "?api_key=" + process.env.REACT_APP_API_KEY;

  try {
    const res = await TMDB.get(endPoint + API_KEY + language + page);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = async () => {
  const endPoint = "/genre/movie/list";
  const language = "&language=en-US";
  const API_KEY = "?api_key=" + process.env.REACT_APP_API_KEY;

  try {
    const res = await TMDB.get(endPoint + API_KEY + language);
    console.log("getGenres", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByQuery = async (query, year) => {
  const endPoint = "/search/movie";
  const language = "&language=en-US";
  const API_KEY = "?api_key=" + process.env.REACT_APP_API_KEY;
  const queryParam = "&query=" + query;
  const yearParam = "&year=" + year;

  try {
    const res = await TMDB.get(
      endPoint + API_KEY + language + queryParam + yearParam
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSmImgUrl = (poster_path) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return baseUrl + poster_path;
};
