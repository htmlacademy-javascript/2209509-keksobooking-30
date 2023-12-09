import {TITLES, TYPE, CHECKIN, CHECKOUT, DESCRIPTION} from './constants.js';
import {getRandomInteger, getRandomLat} from './get-random-integer.js';
import {similarFeatures} from './features.js';
import {similarPhotos} from './photos.js';

export const offer = () => {
  const randomTitleIndex = getRandomInteger(0, TITLES.length - 1);
  const randomAdressIndex = getRandomLat(1, 100000);
  const randomPriceIndex = getRandomInteger(0, 10000000);
  const randomTypeIndex = getRandomInteger(0, TYPE.length - 1);
  const randomRoomsIndex = getRandomInteger(0, 15);
  const randomGuestsIndex = getRandomInteger(0, 30);
  const randomCheckinIndex = getRandomInteger(0, CHECKIN.length - 1);
  const randomCheckoutIndex = getRandomInteger(0, CHECKIN.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);

  return {
    title: TITLES[randomTitleIndex],
    adress: randomAdressIndex,
    price: randomPriceIndex,
    type: TYPE[randomTypeIndex],
    rooms: randomRoomsIndex,
    guests: randomGuestsIndex,
    checkin: CHECKIN[randomCheckinIndex],
    checkout: CHECKOUT[randomCheckoutIndex],
    features: similarFeatures,
    photos: similarPhotos,
    description: DESCRIPTION[randomDescriptionIndex]
  };
};

