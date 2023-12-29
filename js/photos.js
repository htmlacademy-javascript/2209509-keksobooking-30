import { PHOTOS } from './constants';
import { getRandomInteger } from './get-random-integer';

export const createPhotos = () => {
  const randomPhotosIndex = getRandomInteger(0, PHOTOS.length - 1);

  return {
    features: PHOTOS[randomPhotosIndex],
  };
};

export const similarPhotos = Array.from({length: getRandomInteger(1, 100)}, createPhotos);
