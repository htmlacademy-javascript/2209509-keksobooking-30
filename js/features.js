import { FEATURES } from './constants';
import { getRandomInteger } from './get-random-integer';

export const createFeatures = () => {
  const randomFeaturesIndex = getRandomInteger(0, FEATURES.length - 1);

  return FEATURES[randomFeaturesIndex];
};

export const similarFeatures = () => Array.from({length: getRandomInteger(1, 5)}, createFeatures);
