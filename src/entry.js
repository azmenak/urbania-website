import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';

import Main from './components/Main';
import configureStore from './store';

const entryNode = document.getElementById('entry');

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

window.store = store;

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    entryNode
  );
};

injectTapEventPlugin();
render(Main);

if (module.hot) {
  window.store = store;

  module.hot.accept('./components/Main', () => {
    System.import('./components/Main').then(componenet => {
      render(componenet.default);
    });
  });
}
