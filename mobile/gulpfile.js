var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');

var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

var config = {
  name: 'izirong',
  src: './src',
  dist: './dist',
  css: './css',
  js: [
    '**/*.js',
    '!node_modules'
  ]
};

gulp.task('minify-html', function () {
  return gulp.src(config.src + '/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest(config.dist));
});

gulp.task('minify-css', function () {
  return gulp.src(config.css + '/*.css')
    .pipe(concat(config.name + '-app.css'))
    .pipe(autoprefixer({
      browsers: ['not ie < 8', '> 5%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .on('error', util.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});

gulp.task('minify-js', function () {
  return gulp.src(config.js + '/*.js')
    .pipe(concat(config.name + '-app.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify({mangle: false}))
    .on('error', util.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});

gulp.task('default', ['minify-html']);


