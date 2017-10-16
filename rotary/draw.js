// params 参数书名
// - share 份额[数字没有默认],
// - speed 速度[单位s, 最小0.1s],
// - velocityCurve 速度曲线，默认值 ease
//  [linear匀速，ease慢快慢，ease-in慢慢开始，ease-out慢慢结束，ease-in-out慢快慢等，用的是css3的速度曲线]
// - weeks 几周[默认2周，可以不写]
// - callback 回调函数
function turntableDraw(target, params) {
  "use strict";
  this.draw = {};
  this.draw.obj = $(target);
  this.draw.objClass = $(target).attr("class");
  this.draw.newClass = "rotary" + "new" + parseInt(Math.random() * 1000);
  var _jiaodu = parseInt(360 / params.share);
  var _yuan = 360 * (params.weeks || 4);
  var _str = "";
  var _speed = params.speed || "2s";
  var _velocityCurve = params.velocityCurve || "ease";
  var _this = this;
  for (var i = 1; i <= params.share; i++) {
    _str += "." + this.draw.newClass + i + "{";
    _str += "transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
    _str += "-ms-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
    _str += "-moz-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
    _str += "-webkit-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
    _str += "-o-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
    _str += "transition: transform " + _speed + " " + _velocityCurve + ";";
    _str += "-moz-transition: -moz-transform " + _speed + " " + _velocityCurve + ";";
    _str += "-webkit-transition: -webkit-transform " + _speed + " " + _velocityCurve + ";";
    _str += "-o-transition: -o-transform " + _speed + " " + _velocityCurve + ";";
    _str += "}";
    _str += "." + this.draw.newClass + i + "stop{";
    _str += "transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
    _str += "-ms-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
    _str += "-moz-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
    _str += "-webkit-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
    _str += "-o-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
    _str += "}";
  }

  $(document.head).append("<style>" + _str + "</style>");
  _speed = _speed.replace(/s/, "") * 1000;
  this.draw.startTurningOk = false;
  this.draw.goto = function (ind) {
    if (_this.draw.startTurningOk) {
      return false;
    }
    _this.draw.obj.attr("class", _this.draw.objClass + " " + _this.draw.newClass + ind);
    _this.draw.startTurningOk = true;
    setTimeout(function () {
      _this.draw.obj.attr("class", _this.draw.objClass + " " + _this.draw.newClass + ind + "stop");
      if (params.callback) {
        _this.draw.startTurningOk = false;
        params.callback(ind);
      }
    }, _speed + 10);
    return _this.draw;
  };
  return this.draw;
};

$(document).ready(function () {
  // 更新 indicator 指针位置
  var indicatorObj = $(".indicator");
  indicatorObj.css("top", ($(".disc").height() - indicatorObj.height()) / 2);

  // 几份和回调函数这两个参数是必填
  var indicatorDraw = new turntableDraw('.indicator', {
    share: 8,
    speed: "3s",
    velocityCurve: "ease",
    weeks: 6,
    callback: function (num) {
      alert("回调" + num);
      axios.post('http://www.easy-mock.com/mock/59dc71d51de3d46fa94d1421/api/system/user/detail')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  $(".indicator").click(function (event) {
    // ajax
    indicatorDraw.goto(parseInt(Math.random() * 8) + 1);
  });
});
