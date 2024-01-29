import {TITLES, TYPES, TIMEIN, TIMEOUT, DESCRIPTIONS} from './constants.js';
import {getRandomInteger, getRandomLat} from './get-random-integer.js';
import {similarFeatures} from './features.js';
import {similarPhotos} from './photos.js';

export const getOffer = () => {
  const randomTitleIndex = getRandomInteger(0, TITLES.length - 1);
  const randomAdressIndex = getRandomLat(1, 100000);
  const randomPriceIndex = getRandomInteger(0, 10000000);
  const randomTypeIndex = getRandomInteger(0, TYPES.length - 1);
  const randomRoomsIndex = getRandomInteger(0, 15);
  const randomGuestsIndex = getRandomInteger(0, 30);
  const randomCheckinIndex = getRandomInteger(0, TIMEIN.length - 1);
  const randomCheckoutIndex = getRandomInteger(0, TIMEIN.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return {
    title: TITLES[randomTitleIndex],
    adress: randomAdressIndex,
    price: randomPriceIndex,
    type: TYPES[randomTypeIndex],
    rooms: randomRoomsIndex,
    guests: randomGuestsIndex,
    checkin: TIMEIN[randomCheckinIndex],
    checkout: TIMEOUT[randomCheckoutIndex],
    features: similarFeatures(),
    photos: similarPhotos,
    description: DESCRIPTIONS[randomDescriptionIndex]
  };
};

