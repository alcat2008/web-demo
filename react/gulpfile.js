var gulp = require('gulp');
var webpack = require('webpack-stream');

var webpackConfig = require("./webpack.config");

var paths = {
  dest: './build/',
  css: './css/',
  sourcemaps: './sourcemaps/',
  js: [
    '**/*.js',
    '!node_modules',
  ],
};

gulp.task('default', function() {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.dest));
});


