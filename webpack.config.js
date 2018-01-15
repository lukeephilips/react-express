const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  // entry: ,
  entry: {
    vendor:['react',
      'react-dom',
      'axios',
      'lodash.debounce',
      'lodash.pickby',
      'prop-types',
      'babel-polyfill'],
    app: ['./lib/renderers/dom.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',

    })
  ]
};

module.exports = config;
