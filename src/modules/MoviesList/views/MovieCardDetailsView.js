import React from 'react';
import Header from '../../../base/common/Header/Header';
import MovieCardDetails from '../components/MovieCardDetails';

export default class MovieCardDetailsView extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieCardDetails />
      </div>
    );
  }
}
