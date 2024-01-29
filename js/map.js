export const initMap = (points) => {
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
    lat: 	35.682119472193015,
    lng: 139.73270416259768,
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
    document.querySelector('#address').value = `${evt.target.getLatLng().lng}, ${evt.target.getLatLng().lat}`;
  });


  const createCustomPopup = (point) => {
    const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
    const popupElement = balloonTemplate.cloneNode(true);

    popupElement.querySelector('.balloon__title').textContent = point.title;
    popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

    return popupElement;
  };

  points.slice(0, 10).forEach((point) => {
    const {lat, lng} = point.location;
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
};

