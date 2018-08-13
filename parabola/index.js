var eleBtn = document.getElementById('btnCart');
var eleFlyItem = document.getElementById('flyItem');
var eleFlyImg = eleFlyItem.querySelector('img');
var eleCart = document.querySelector('#shopCart');

var isRunning = false;
eleBtn.addEventListener('click', function () {
  // 现在按钮距离购物车的距离
  var boundBtn = eleBtn.getBoundingClientRect();
  var boundCart = eleCart.getBoundingClientRect();
  // 中心点的水平垂直距离
  var offsetX = boundCart.left + boundCart.width / 2 - (boundBtn.left + boundBtn.width / 2);
  var offsetY = boundCart.top + boundCart.height / 2 - (boundBtn.top + boundBtn.height / 2);
  // 页面滚动尺寸
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  if (isRunning == false) {
    // 购物车图形出现与初始定位
    eleFlyItem.style.display = 'block';
    eleFlyItem.style.left = (boundBtn.left + scrollLeft + this.clientWidth / 2) + 'px';
    eleFlyItem.style.top = (boundBtn.top + scrollTop + this.clientHeight / 2) + 'px';
    // 开始动画
    eleFlyItem.style.transform = 'translateX('+ offsetX +'px)';
    eleFlyImg.style.transform = 'translateY('+ offsetY +'px)';
    // 动画标志量
    isRunning = true;
    setTimeout(function () {
      eleFlyItem.style.display = '';
      eleFlyItem.style.transform = 'translateX(0)';
      eleFlyImg.style.transform = 'translateY(0)';
      isRunning = false;
      eleCart.querySelector('span').innerHTML = eleCart.querySelector('span').innerHTML * 1 + 1;
    }, 490);
  }
});
