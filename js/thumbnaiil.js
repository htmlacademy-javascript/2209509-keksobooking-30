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

  thumbnail.querySelector('.popup__title').textContent = title;
  thumbnail.querySelector('.popup__text--address').textContent = adress;
  thumbnail.querySelector('.popup__text--price').number = String(`${ price } ₽/ночь`);
  thumbnail.querySelector('.popup__type').textContent = type;
  thumbnail.querySelector('.popup__text--capacity').number = String(`${ rooms } комнаты для ${ guests } гостей`);
  thumbnail.querySelector('.popup__text--time').number = String(`Заезд после ${ checkin }, выезд до ${ checkout }`);
  thumbnail.querySelector('.popup__features').textContent = features;
  thumbnail.querySelector('.popup__photos').src = photos;
  thumbnail.querySelector('.popup__description').textContent = description;
  thumbnail.querySelector('.popup__avatar').src = author;

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
