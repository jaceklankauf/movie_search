import { combineReducers } from 'redux';
import { movieList } from './reducers';
import { movieDetail } from './reducers';


const rootReducer = combineReducers({
  movieList,
  movieDetail
});

export default rootReducer;
