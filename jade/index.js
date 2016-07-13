/**
 * Module dependencies
 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var stylus = require('stylus');
var nib = require('nib');

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));

app.get('/', function (req, res) {
  // res.send('Hi there!');

  res.render('index',
    { title : 'Home' }
  );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {

  // 'development' will print stacktrace
  // 'production' no stacktraces leaked to user
  const error = (app.get('env') === 'development') ? err : {};

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: error
  });
});

app.listen(3000);
