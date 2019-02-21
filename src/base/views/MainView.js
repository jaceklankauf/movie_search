import React from 'react';
import Header from '../common/Header/Header';
import MovieListView from '../../modules/MoviesList/views/MovieListView';

export default class MainView extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieListView />
      </div>
    );
  }
}
