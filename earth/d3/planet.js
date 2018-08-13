const width = Math.min(document.body.scrollWidth, document.body.scrollHeight), height = width
const initScale = width / 2 - 20
// 将球面投影到平面
const projection = d3.geo.orthographic()
  .translate([width / 2, height / 2]) // 在canvas居中显示
  .scale(initScale)  // 投影地图大小
  .clipAngle(90)  // 忽略另一面
  .rotate([-115, -30, 0]);  // 中国地图居中

// 创建一个canvas
const canvas = d3.select("body").append("canvas")
  .attr("width", width)
  .attr("height", height)

// 获取canvas.context
const context = canvas.node().getContext("2d");

var path = d3.geo.path()
  .projection(projection)
  .context(context);

let globe = {}, land, oceans, countries, borders_countries,provinces, borders_provinces,citys, borders_citys
// 提取地球地理数据
d3.json("./world-110m-withlakes.json", (error, world_withlakes) => {
  d3.json("./world.json", (error, world) => {
    land = topojson.feature(world_withlakes, world_withlakes.objects.land)
    oceans = topojson.feature(world, world.objects.land)
    countries = topojson.feature(world, world.objects.countries).features
    provinces = topojson.feature(world, world.objects.china_provinces).features
    citys = topojson.feature(world, world.objects.china_citys).features
    borders_countries = topojson.mesh(world, world.objects.countries, function (a, b) { return true; });
    borders_provinces = topojson.mesh(world, world.objects.china_provinces, function (a, b) { return true; });
    borders_citys = topojson.mesh(world, world.objects.china_citys, function (a, b) { return true; });
    drawPlanet()
    countryCount = countries.length
  })
})

const color = d3.scale.category20()
// 渲染星球
function drawPlanet(scale) {
  context.clearRect(0, 0, width, height);

  context.fillStyle = "#072235", context.beginPath(), path(oceans), context.fill();
  context.fillStyle = "#07638a", context.beginPath(), path(land), context.fill();
  if (projection.scale() < 1000) {
    context.strokeStyle = "#083147", context.lineWidth = .5, context.beginPath(), path(borders_countries), context.stroke();
  }
  if (projection.scale() >= 1000 && projection.scale() < 5000) {
    context.strokeStyle = "#083147", context.lineWidth = .5, context.beginPath(),path(borders_provinces),context.stroke();
    // 省份着色
    provinces.map((item,index)=>{
      // 省份背景色
      context.fillStyle = color(index), context.beginPath(),path(item),context.fill();

      // 省份名称
      const centroid = path.centroid(item)
      context.fillStyle = '#00001e'
      context.fillText(item.properties.name, centroid[0], centroid[1]);
    })

  } else if (projection.scale() >= 5000) {
    context.strokeStyle = "#083147", context.lineWidth = .5, context.beginPath(), path(borders_citys), context.stroke();
  }
  // 边界
  context.strokeStyle = "#000", context.lineWidth = 2, context.beginPath(), path(globe), context.stroke();


}

// zoom
const zoom = d3.behavior.zoom()
  .scaleExtent([initScale, 10000])
  .on('zoom', function () {
    const changeScale = d3.event.scale
    if (changeScale === 1) return
    projection.scale(d3.event.scale);
    drawPlanet()
  })
canvas.call(zoom).on("dblclick.zoom", null)

const drag = d3.behavior.drag()
  .on('drag', function () {
    var dx = d3.event.dx;
    var dy = d3.event.dy;
    var rotation = projection.rotate();
    var radius = projection.scale();
    var scale = d3.scale.linear()
      .domain([-1 * radius, radius])
      .range([-90, 90]);
    var degX = scale(dx);
    var degY = scale(dy);
    rotation[0] += degX;
    rotation[1] -= degY;
    if (rotation[1] > 90) rotation[1] = 90;
    if (rotation[1] < -90) rotation[1] = -90;
    if (rotation[0] >= 180) rotation[0] -= 360;
    // 拖拽的时候从新渲染星球
    drawPlanet()
    projection.rotate(rotation);
  });

canvas.call(drag)

let autoRotateTimer
function autoRotate() {
  if (!IS_AUTO_ROTATE) return
  var rotation = projection.rotate()
  rotation[0] += .5
  if (rotation[0] >= 180) rotation[0] -= 360
  projection.rotate(rotation)
  drawPlanet()
  autoRotateTimer = requestAnimationFrame(autoRotate)
}

let IS_AUTO_ROTATE = false
function startAutoRotate() {
  IS_AUTO_ROTATE = true
  clearTimeout(autoRotateTimer)
  autoRotate()
}

function stopAutoRotate() {
  IS_AUTO_ROTATE = false
  clearTimeout(autoRotateTimer)
}

function rotateCenter() {
  projection.rotate([-115, -30, 0])
  drawPlanet()
}

function scaleTo(scale) {
  projection.scale(scale || initScale);
  drawPlanet()
}
