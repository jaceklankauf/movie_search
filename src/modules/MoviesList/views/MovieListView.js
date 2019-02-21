import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieList } from '../../../redux/actions/actions';
import { URL_IMG } from '../../const';

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
              <div key={movie.id} className="mov-movie-list-card">
                <p className="mov-movie-list-title">{movie.title}</p>
                <p className="mov-movie-list-overview">{movie.overview}</p>
                <img className="mov-movie-list-img" src={URL_IMG + movie.poster_path} />
              </div>
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
    list: movieList.movieList.items
  };
};

export default connect(mapStateToProps)(MovieListView);
