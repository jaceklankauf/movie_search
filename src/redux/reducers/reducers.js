import { combineReducers } from 'redux';
import {
  FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR,
  FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR,
} from '../actions/actions';

const defaultStateList = {
  isFetching: false,
  items: [],
  error: {}
};

export const movieList = (state = defaultStateList, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case SEARCH_MOVIE:
      return { ...state, isFetching: true };
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, isFetching: false, items: action.data };
    case FETCH_MOVIES_ERROR:
    case SEARCH_MOVIE_ERROR:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

const defaultStateDetail = {
  isFetching: false,
  item: {},
  error: {}
};

export const movieDetail = (state = defaultStateDetail, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.data
      });
    case FETCH_MOVIE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.data
      });
    default:
      return state;
  }
};
