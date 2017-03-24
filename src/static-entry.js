import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';

import createReducer from './reducers';
import Main from './components/Main';
import template from './template.ejs';

if (typeof document !== 'undefined') {
  require('./entry'); // eslint-disable-line global-require
}

const metaTags = [
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:title',
    content: 'Vidhub',
  },
  {
    property: 'og:description',
    content: 'The easiest way to review and collaborate on videos with clients, coworkers, and teams.',
  },
  {
    property: 'og:image',
    content: '1200x630 (max 5MB)',
  },
  {
    property: 'og:url',
    content: 'https://vidhub.co',
  },
  {
    name: 'twitter:title',
    content: 'Vidhub',
  },
  {
    name: 'twitter:description',
    content: 'The easiest way to review and collaborate on videos with clients, coworkers, and teams',
  },
  {
    name: 'twitter:image',
    content: '560x300 (max 1MB)',
  },
];

export default locals => {
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));

  const store = createStore(
    createReducer(),
    fromJS(JSON.parse(JSON.stringify(locals.state))),
    applyMiddleware(reduxSaga())
  );

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Main location={locals.path} />
    </Provider>
  );

  return template({
    html,
    js,
    css,
    metaTags,
    state: locals.state,
  });
};
