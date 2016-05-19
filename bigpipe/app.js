var express = require('express');
var fs = require('fs');
var async = require('async');

var server = express();

server.use('/bigpipe', express.static(__dirname + '/static'));
server.use('/lib', express.static(__dirname + '/bower_components'));

server.listen(4000, function () {
  console.log('server is listen on port 4000......');
});

server.get('/info', function (req, res, next) {
  var content = fs.readFileSync(__dirname + '/index.html', 'utf8');

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(content);

  // 下面开始加载文件内容
  // 开始并行加载多个文件
  async.parallel([function (callback) {
    fs.readFile(__dirname + '/data/users.txt', 'utf8', function (err, data) {
      var tmpData = data.replace(/\n/g, '\\n');
      res.write('<script>bigpipe.set("users","' + tmpData + '");</script>');
      callback(err, tmpData);
    });
  }, function (callback) {
    fs.readFile(__dirname + '/data/info.txt', 'utf8', function (err, data) {
      var tmpData = data.replace(/\n/g, '\\n');
      console.log(tmpData);
      res.write('<script>bigpipe.set("info","' + tmpData + '");</script>');
      callback(err, tmpData);
    });
  }], function (err, result) {
    // if(err) res.end();
    res.end();
  });
});
