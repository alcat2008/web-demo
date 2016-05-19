var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
// var plumber = require('gulp-plumber');

// var autoprefixer = require('autoprefixer-stylus');
var autoprefixer = require('gulp-autoprefixer');

var uglify = require('gulp-uglify');
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
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['not ie < 8', '> 5%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    // 在这里将转换任务加入管道
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write(paths.sourcemaps))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['style']);
});

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
