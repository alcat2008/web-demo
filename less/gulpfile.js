var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

var paths = {
  less: './less/*.less',
  css: './css/',
  js: [
    '**/*.js',
    '!node_modules',
  ],
};

gulp.task('style', function () {
  return gulp.src(paths.less)
    .pipe(plumber({
      errorHandler: function (err) {
        gutil.log('Gulp Error!', err.message);
        this.emit('end');
      }
    }))
    .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['not ie < 8', '> 5%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(gutil.env.type === 'production' ? cleanCSS({ compatibility: 'ie8' }) : gutil.noop())
    .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.write())
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function () {
  gulp.start('style');
  gulp.watch(paths.less, ['style']);
});

gulp.task('default', function () {
  gulp.start('style');
});
