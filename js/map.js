const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 10;
const cityCenter = {
  lat: 59.92749,
  lng: 30.31127,
};
const startCoordinate = {
  lat: 59.96831,
  lng: 30.31748,
};

const map = L.map('map').setView(cityCenter, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);
