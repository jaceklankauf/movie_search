import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { URL_IMG } from '../../const';

class MovieCard extends React.Component {
  render() {
    const { data } = this.props;
    const detailUrl = `movie/${ data.id }`;

    return (
      <Link to={detailUrl}>
        <div className="mov-movie-list-card">
          <p className="mov-movie-list-title">{data.title}</p>
          <p className="mov-movie-list-overview">{data.overview}</p>
          <img className="mov-movie-list-img" src={URL_IMG + data.poster_path} />
        </div>
      </Link>
    );
  }
}

MovieCard.propTypes = {
  data: PropTypes.object,
};

export default MovieCard;
