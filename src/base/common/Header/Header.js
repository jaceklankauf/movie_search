import React from 'react';
import Search from '../../../modules/Search/components/Search';
import movieDBlogo from '../../../assets/pics/powered-by-the-movie-db.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="mov-header-box">
        <div className="mov-header">
          <div className="mov-header-elements">
            <div>
              <a href="/">
                <div>
                  MOVIE SEARCH
                  <img src={movieDBlogo} alt="movie DB logo" />
                </div>
              </a>
            </div>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
