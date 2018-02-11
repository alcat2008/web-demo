// requestAnimationFrame 的浏览器兼容性处理
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var canvas = document.createElement("canvas")
var ctx = canvas.getContext("2d")
canvas.width = 512
canvas.height = 480
document.body.appendChild(canvas)


var bgReady = false
var bgImg = new Image()
bgImg.onload = function () {
  bgReady = true
}
bgImg.src = "images/background.png"

var heroReady = false
var heroImg = new Image()
heroImg.onload = function () {
  heroReady = true
}
heroImg.src = "images/hero.png"

var monsterReady = false
var monsterImg = new Image()
monsterImg.onload = function () {
  monsterReady = true
}
monsterImg.src = "images/monster.png"


var hero = {
  speed: 256,
  x: 0,
  y: 0
}
var monster = {
  x: 0,
  y: 0
}
var monstersCaught = 0

var keysDown = {}
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true
}, false)
addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode]
}, false)


var reset = function () {
  hero.x = canvas.width / 2
  hero.y = canvas.height / 2

  monster.x = 32 + (Math.random() * (canvas.width - 64))
  monster.y = 32 + (Math.random() * (canvas.height - 64))
}


var update = function (modifier) {
  if (38 in keysDown) { // 用户按的是↑
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // 用户按的是↓
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // 用户按的是←
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) { // 用户按的是→
    hero.x += hero.speed * modifier;
  }

  // 英雄与怪物碰到了么？
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    reset();
  }
}


var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImg, 0, 0)
  }
  if (heroReady) {
    ctx.drawImage(heroImg, hero.x, hero.y)
  }
  if (monsterReady) {
    ctx.drawImage(monsterImg, monster.x, monster.y)
  }

  ctx.fillStyle = "rgb(250, 250, 250)"
  ctx.font = "24px Helvetica"
  ctx.textAlign = "left"
  ctx.textBaseline = "top"
  ctx.fillText("Monsterrs caught: " + monstersCaught, 32, 32);
}

// 游戏主函数
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // 立即调用主函数
  requestAnimationFrame(main);
};

// 少年，开始游戏吧！
var then = Date.now();
reset();
main();
