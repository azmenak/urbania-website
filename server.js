const webpack = require('webpack');
const React = require('react');
const ReactDOM = require('react-dom/server');
const express = require('express');
const Template = require('./src/template');

require('./webpack.config')().then(config => {
  const state = config.plugins.find(plugin => plugin instanceof webpack.LoaderOptionsPlugin)
                              .options
                              .options
                              .state;

  const renderDocToString = props =>
    `<!doctype html>\n${ReactDOM.renderToStaticMarkup(<Template {...props} />)}`;

  const app = express();
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', (req, res) => {
    const html = renderDocToString({
      bundle: `${config.output.publicPath}main.js`,
      state,
    });
    res.send(html);
  });

  app.listen('9000', '0.0.0.0', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Dev server started');
  });
});

