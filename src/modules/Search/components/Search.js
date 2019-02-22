import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { URL_SEARCH } from '../../const';
import { API_KEY } from '../../../redux/utils';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      return this.handleSubmit(this.state.value);
    }
  }

  handleSubmit = (searchText) => {
    this.props.history.push('/search/' + searchText);
    this.setState({ value: '' });
  }

  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const noWhiteSpaceValue = value.trim();

    if (noWhiteSpaceValue.length > 0) {
      const url = URL_SEARCH + API_KEY + '&query=' + noWhiteSpaceValue;
      fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => {
          const results = data.map(movie => {
            const temporary = {};
            temporary.id = movie.id;
            temporary.title = movie.title;
            temporary.year = (movie.release_date == '') ? '-' : movie.release_date.substring(0, 4);
            return temporary;
          });
          this.setState({
            suggestions: results
          });
        }).catch(error => console.log('error'));
    } else {
      this.setState({
        suggestions: []
      });
    }
  }

  renderSuggestion = (suggestion) => {
    return (
      <a>
        <div className="mov-search-result-text">
          <div className="mov-search-result-name">
            {suggestion.title}
          </div>
          {suggestion.year}
        </div>
      </a>
    );
  };

  onSuggestionSelected = (event, { suggestion, method }) => {
    console.log(suggestion);
    if (method === 'enter')
      event.preventDefault();
    this.props.history.push('/movie/' + suggestion.id);
    this.setState({ value: '' });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange,
      onKeyPress: this.handleKeyDown,
      placeholder: 'Search...'
    };

    return (
      <div className="mov-search-box">
        <div className="mov-search-input">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(Search);
