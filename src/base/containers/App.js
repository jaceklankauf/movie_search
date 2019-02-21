import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from '../views/MainView';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
