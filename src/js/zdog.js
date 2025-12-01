import Zdog from "https://esm.sh/zdog";

var yellow = "#ED0";
var blue = "#127ac4";
var eggplant = "#636";
const TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
});

var eyeGroup = new Zdog.Group({
  addTo: illo,
  translate: { z: 20 },
});

new Zdog.Ellipse({
  addTo: eyeGroup,
  width: 165,
  height: 90,
  stroke: 18,
  fill: true,
  color: "black",
});

new Zdog.Ellipse({
  addTo: eyeGroup,
  width: 160,
  height: 80,
  stroke: 8,
  fill: true,
  color: "white",
});

var iris = new Zdog.Ellipse({
  addTo: eyeGroup,
  diameter: 70,
  stroke: 8,
  fill: true,
  color: blue,
});

iris.copy({
  diameter: 40,
  color: eggplant,
});

iris.copy({
  diameter: 30,
  translate: { x: 15, y: -15 },
  color: "white",
});

function animate() {
  illo.rotate.y += 0.03;
  illo.rotate.x += 0.03;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
