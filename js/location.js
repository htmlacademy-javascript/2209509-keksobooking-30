import {getRandomLat} from './get-random-integer.js';

export const location = () => {
  const randomLatIndex = getRandomLat(35.65000, 35.70000);
  const randomIngIndex = getRandomLat(139.70000, 139.80000);

  return {
    lat: randomLatIndex,
    ing: randomIngIndex,
  };
};
