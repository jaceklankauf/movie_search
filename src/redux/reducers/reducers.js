import { combineReducers } from 'redux';
import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/actions';

const defaultStateList = {
  isFetching: false,
  items: [],
  error: {}
};

const movieList = (state = defaultStateList, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, isFetching: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, isFetching: false, items: action.data };
    case FETCH_MOVIES_ERROR:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

const moviesApp = combineReducers({
  movieList,
});

export default moviesApp;
