var gulp = require('gulp');
var gutil = require('gulp-util');
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
    .pipe(sourcemaps.init())
    .pipe(concat(config.name + '-app.css'))
    .pipe(autoprefixer({
      browsers: ['not ie < 8', '> 5%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(gutil.env.type === 'production' ? cleanCSS({ compatibility: 'ie8' }) : gutil.noop())
    .on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});

gulp.task('minify-js', function () {
  return gulp.src(config.js + '/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat(config.name + '-app.js'))
    .pipe(gutil.env.type === 'production' ? uglify({ mangle: false }) : gutil.noop())
    .on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});

gulp.task('default', ['minify-html']);

