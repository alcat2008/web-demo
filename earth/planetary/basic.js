const planet = planetaryjs.planet();

// You can remove this statement if `world-110m.json`
// is in the same path as the HTML page:
planet.loadPlugin(planetaryjs.plugins.earth({
  topojson: { file: './world-110m.json' },
  oceans:   { fill:   '#000080' },
  land:     { fill:   '#339966' },
  borders:  { stroke: '#008000' }
}));

// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
const canvas = document.getElementById('globe');
planet.draw(canvas);
