import {fetchResult} from './server.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 16;
const iconConfig = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};

const startCoordinate = {
  lat: 	35.6895,
  lng: 139.692,
};

const map = L.map('map').setView(startCoordinate, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

const mainPinMarker = L.marker(startCoordinate, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

const points = [
  {
    title: fetchResult,
    url: './img/pin.svg',
    width: 40,
    height: 40,
    lat: 	35.6835,
    lng: 139.692,
  },
  {
    title: fetchResult,
    url: './img/pin.svg',
    width: 40,
    height: 40,
    lat: 	35.6895,
    lng: 139.392,
  },
  {
    title: fetchResult,
    url: './img/pin.svg',
    width: 40,
    height: 40,
    lat: 	35.6895,
    lng: 139.652,
  },
  {
    title: fetchResult,
    url: './img/pin.svg',
    width: 40,
    height: 40,
    lat: 	35.6895,
    lng: 139.92,
  },
];

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

points.forEach((point) => {
  const {lat, lng} = point;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCustomPopup(point));
});
