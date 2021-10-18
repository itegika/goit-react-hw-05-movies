import axios from "axios";

const KEY = "15f17b74af157d4eeef693405d33f902";
const URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchTrends = async (currentPage = 1) => {
  try {
    const { data } = await axios.get(
      `${URL}/trending/movie/day?api_key=${KEY}&page=${currentPage}`
    );
    const result = data.results;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovies = async (searchQuery, page = 1) => {
  try {
    const { data } = await axios.get(
      `${URL}/search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}`
    );
    const result = data.results;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async (movie_id) => {
  try {
    const { data } = await axios.get(`${URL}/movie/${movie_id}?api_key=${KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${URL}/movie/${movie_id}/credits?api_key=${KEY}`
    );
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${URL}/movie/${movie_id}/reviews?api_key=${KEY}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
