var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
// var plumber = require('gulp-plumber');

// var autoprefixer = require('autoprefixer-stylus');
var autoprefixer = require('gulp-autoprefixer');

var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

var paths = {
  stylus: './styl/style.styl',
  css: './css/',
  sourcemaps: './sourcemaps/',
  js: [
    '**/*.js',
    '!node_modules',
  ],
};

gulp.task('style', function () {
  return gulp.src(paths.stylus)
    // .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['not ie < 8', '> 5%', 'last 2 versions'],
      cascade: false
    }))
    // 在这里将转换任务加入管道
    .on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['style']);
});

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
