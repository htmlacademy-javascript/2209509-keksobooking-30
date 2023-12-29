import {TYPE} from './constants.js';
const thumbnailTemplate = document.querySelector('#card').content.querySelector('.popup');
const container = document.querySelector('#map-canvas');

const createThumbnail = ({
  title,
  adress,
  price,
  type,
  rooms,
  guests,
  checkin,
  checkout,
  features,
  photos,
  description,
  author
}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  if (type) {
    thumbnail.querySelector('.popup__title').textContent = title;
  }
  if (type) {
    thumbnail.querySelector('.popup__text--address').textContent = adress;
  }
  if (type) {
    thumbnail.querySelector('.popup__text--price').number = String(`${ price } ₽/ночь`);
  }
  if (type) {
    thumbnail.querySelector('.popup__type').textContent = TYPE[type];
  }
  if (type) {
    thumbnail.querySelector('.popup__text--capacity').number = String(`${ rooms } комнаты для ${ guests } гостей`);
  }
  if (type) {
    thumbnail.querySelector('.popup__text--time').number = String(`Заезд после ${ checkin }, выезд до ${ checkout }`);
  }
  if (type) {
    thumbnail.querySelector('.popup__features').textContent = features;
  }
  if (type) {
    thumbnail.querySelector('.popup__photos').src = photos;
  }
  if (type) {
    thumbnail.querySelector('.popup__description').textContent = description;
  }
  if (type) {
    thumbnail.querySelector('.popup__avatar').src = author.avatar;
  }

  return thumbnail;
};


const renderThumbnails = (popup) => {
  const fragment = document.createDocumentFragment();
  popup.forEach((offer) => {
    const thumbnaiil = createThumbnail(offer);
    fragment.append(thumbnaiil);
  });
  container.append(fragment);
};
export {renderThumbnails};
