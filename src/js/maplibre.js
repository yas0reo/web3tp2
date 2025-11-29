import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

const carte = new maplibregl.Map({
  container: "carte",
  style:
    "https://api.maptiler.com/maps/toner-v2/style.json?key=tfxEieFSmHMkpJR3yWdP",
  center: [126.65200501970997, 45.75615284512783],
  zoom: 17,
  attributionControl: false,
});
