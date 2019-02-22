import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from '../views/MainView';
import MovieCardDetails from '../../modules/MoviesList/components/MovieCardDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainView} />
          <Route exact={true} path="/movie/:movieId" component={MovieCardDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
