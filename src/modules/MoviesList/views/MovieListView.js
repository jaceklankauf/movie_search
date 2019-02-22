import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieList } from '../../../redux/actions/actions';
import MovieCard from '../components/MovieCard';

class MovieListView extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovieList());
  }

  render() {
    const { list } = this.props;
    return (
      <div className="mov-movie-list-view">
        <div className="mov-movie-list-container">
          {list.map((movie) => {
            return (
              <MovieCard key={movie.id} data={movie} />
            );
          })}
        </div>
      </div>
    );
  }
}

MovieListView.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.array,
};

const mapStateToProps = ({ movieList }) => {
  return {
    list: movieList.items
  };
};

export default connect(mapStateToProps)(MovieListView);
