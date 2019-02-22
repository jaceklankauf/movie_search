import {
  URL_LIST,
  API_KEY,
  URL_MOVIE_DETAILS
} from '../utils';
import { URL_SEARCH } from '../../modules/const';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_ERROR = 'SEARCH_MOVIE_ERROR';

function fetchMovies() {
  return {
    type: FETCH_MOVIES
  };
}

function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}

function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    error
  };
}

function searchMovie() {
  return {
    type: SEARCH_MOVIE
  };
}

function searchMovieSuccess(data) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data
  };
}

function searchMovieError(error) {
  return {
    type: SEARCH_MOVIE_ERROR,
    error
  };
}

export function fetchMovieList() {
  const url = URL_LIST + API_KEY;
  return function (dispatch) {
    dispatch(fetchMovies());
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(error => dispatch(fetchMoviesError(error)));
  };
}

export function searchMoviesList(title){
  let url = URL_SEARCH + API_KEY + '&query=' + title;
  return function(dispatch){
    dispatch(searchMovie())
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(searchMovieSuccess(data,title)))
      .catch(error => dispatch(searchMovieError(error)))
  }
}

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';


function fetchMovie() {
  return {
    type: FETCH_MOVIE
  };
}

function fetchMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    data
  };
}

function fetchMovieError(error) {
  return {
    type: FETCH_MOVIE_ERROR,
    error
  };
}

export function fetchMovieDetail(id) {
  const urlMovieDetails = URL_MOVIE_DETAILS + id + API_KEY;
  return function (dispatch) {
    dispatch(fetchMovie());
    return fetch(urlMovieDetails)
      .then(response => response.json())
      .then(data => dispatch(fetchMovieSuccess(data)))
      .catch(error => dispatch(fetchMovieError(error)));
  };
}
