const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const _ = require('lodash');
const env = require('./env.json');
const fs = require('fs');

const paths = _.values(require('./src/paths'));

let release;
try {
  release = fs.readFileSync('release').toString();
} catch (err) {
  release = 'development';
}

const state = {
  title: 'URBANIA',
};

module.exports = (config = {}) => {
  const PRODUCTION = process.env.NODE_ENV === 'production';

  return new Promise(resolve => {
    Promise.resolve().then(() => {
      resolve(Object.assign({}, config, {
        entry: PRODUCTION ? {
          main: path.resolve(__dirname, 'src', 'static-entry.js'),
        } : {
          main: [
            'webpack-hot-middleware/client?http://0.0.0.0:8080',
            'react-hot-loader/patch',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src', 'entry.js'),
          ],
        },

        output: Object.assign({}, {
          path: path.resolve(__dirname, 'dist'),
          publicPath: '/',
          libraryTarget: 'umd',
        }, PRODUCTION ? {
          filename: '[name].[chunkhash].js',
          chunkFilename: '[name].[chunkhash].chunk.js',
        } : {
          filename: '[name].js',
          chunkFilename: '[name].chunk.js',
        }),


        module: {
          rules: [
            {
              test: /\.css$/,
              include: /flexboxgrid/,
              use: PRODUCTION ? ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                      svgo: false,
                      module: true,
                    },
                  },
                ],
              }) : [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    module: true,
                    svgo: false,
                  },
                },
              ],
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: PRODUCTION ? ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                      svgo: false,
                      module: true,
                    },
                  },
                  { loader: 'postcss-loader' },
                ],
              }) : [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    svgo: false,
                    module: true,
                    localIdentName: '[name]__[local]__[hash:base64:6]',
                    importLoaders: 1,
                    sourceMap: true,
                  },
                },
                { loader: 'postcss-loader' },
              ],
            },
            {
              test: /\.jsx?$/,
              include: [
                path.resolve(__dirname, 'src'),
              ],
              use: [].concat(PRODUCTION ? [] : []).concat([
                {
                  loader: 'babel-loader',
                },
              ]),
            },
            {
              test: /\.ejs$/,
              loader: 'ejs-loader',
              include: path.resolve(__dirname, 'src'),
            },
            {
              test: /\.(jpe?g|png|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name]-[hash].[ext]',
                  },
                },
              ],
            },
            {
              test: /\.(mp4|webm)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name]-[hash].[ext]',
                  },
                },
              ],
            },
            {
              test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash].[ext]',
                    mimetype: 'application/font-woff',
                  },
                },
              ],
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash].[ext]',
                    mimetype: 'application/octet-stream',
                  },
                },
              ],
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash].[ext]',
                  },
                },
              ],
            },
          ],
        },

        plugins: [
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
              RELEASE: JSON.stringify(release),
            },
            CONFIG: _.reduce(env.config, (result, value, key) => _.assign({}, result, { [key]: JSON.stringify(value) }), {}),
          }),
          new webpack.NamedModulesPlugin(),
          new webpack.LoaderOptionsPlugin({
            options: {
              postcss: [
                autoprefixer({ browsers: ['last 2 versions'] }),
                precss({
                  variables: {
                    variables: require('./src/css-vars'), // eslint-disable-line global-require
                  },
                }),
              ],
              context: __dirname,
              state,
            },
          }),
          new webpack.NoEmitOnErrorsPlugin(),
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ].concat(PRODUCTION ? [
          new StaticSiteGeneratorPlugin('main', paths, { state }),
          new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true,
          }),
        ] : [
          new webpack.HotModuleReplacementPlugin(),
        ]),

        stats: {
          chunks: false,
          colors: true,
        },

        resolve: {
          modules: [
            'node_modules',
            path.resolve('./src'),
          ],
        },

      }, PRODUCTION ? {
        devtool: 'source-map',
      } : {
        devtool: 'inline-source-map',
        devServer: {
          host: '0.0.0.0',
          port: 8080,
          hot: true,
          historyApiFallback: true,
        },
      }));
    });
  });
};
