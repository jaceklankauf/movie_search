import { combineReducers } from 'redux';
import movieList from './reducers';

const rootReducer = combineReducers({
  movieList
});

export default rootReducer;
