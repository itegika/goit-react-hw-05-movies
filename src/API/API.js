import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "15f17b74af157d4eeef693405d33f902",
};
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchTrends = async (currentPage = 1) => {
  try {
    const { data } = await axios.get(`/trending/movie/day?page=${currentPage}`);
    const result = data.results;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovies = async (searchQuery, page = 1) => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${searchQuery}&page=${page}`
    );
    const result = data.results;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
