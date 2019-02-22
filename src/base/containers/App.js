import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from '../views/MainView';
import MovieCardDetailsView from '../../modules/MoviesList/views/MovieCardDetailsView';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainView} />
          <Route exact={true} path="/movie/:movieId" component={MovieCardDetailsView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
