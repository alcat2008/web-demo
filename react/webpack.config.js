/* eslint-disable */

var path = require('path');

var config = {
  entry: [
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel?presets[]=react,presets[]=es2015'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }],
  },
  // devtool: '#cheap-module-eval-source-map'
};

module.exports = config;
