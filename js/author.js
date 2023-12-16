import {getRandomInteger} from './get-random-integer.js';

export const author = () => {
  const randomAuthorIndex = getRandomInteger(1, 10);

  return {
    avatar: (`img/avatars/user${ 0 + randomAuthorIndex }.png`),
  };
};
