import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { matchUrl } from '../../../base/utils';
import { URL_IMG } from '../../const';
import { fetchMovieDetail } from '../../../redux/actions/actions';

class MovieCardDetails extends React.Component {
  componentDidMount() {
    const detailUrl = matchUrl('/movie/:id', location.pathname);
    const { dispatch } = this.props;
    dispatch(fetchMovieDetail(`${ detailUrl.id }`));
  }

  componentDidUpdate() {
    const detailUrl = matchUrl('/movie/:id', location.pathname);
    const { dispatch } = this.props;
    dispatch(fetchMovieDetail(`${ detailUrl.id }`));
  }

  render() {
    const { details } = this.props;
    return (
      <div className="mov-movie-detail-view">
        <div className="mov-movie-detail-container">
          <div className="mov-movie-detail-img">
            <img className="mov-movie-img" src={URL_IMG + details.poster_path} />
          </div>
          <div className="mov-movie-detail-overview">
            <div className="mov-movie-title-head">
              <div className="mov-movie-detail-title">
                {details.title}
              </div>
              <div>
                rate {details.vote_average}/10
              </div>
            </div>
            <p>
              Release date: {details.release_date}
            </p>
            <p>{details.runtime} minutes</p>
            <p>
              {details.overview}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MovieCardDetails.propTypes = {
  dispatch: PropTypes.func,
  details: PropTypes.object,
};

const mapStateToProps = ({ movieDetail }) => {
  return {
    details: movieDetail.item
  };
};

export default connect(mapStateToProps)(MovieCardDetails);
