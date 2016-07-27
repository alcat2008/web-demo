/* eslint-disable */

var path = require('path');

var config = {
  entry: [
    path.resolve(__dirname, 'counter/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      loader: "babel-loader",

      // Skip any files outside of your project's `src` directory
      // include: [
      //   path.resolve(__dirname, "src"),
      // ],
      exclude: [
        path.resolve(__dirname, "node_modules"),
      ],

      // Only run `.js` and `.jsx` files through Babel
      test: /\.jsx?$/,

      // Options to configure babel with
      query: {
        // https://github.com/babel/babel-loader#options
        cacheDirectory: true,

        // https://babeljs.io/docs/usage/options/
        babelrc: false,
        presets: [
          'react',
          'es2015',
          'stage-0',
        ],
        plugins: ['transform-runtime'],
      },
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
