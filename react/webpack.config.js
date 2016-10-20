/* eslint-disable */

var path = require('path');

var config = {
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    // 'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }],
  },

  debug: true,
  // devtool: '#cheap-module-eval-source-map'
  devtool: '#source-map'
};

module.exports = config;
