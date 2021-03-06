import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './redux/store/configureStore';
import App from './base/containers/App';
import './assets/styles/base.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
