import {getRandomInteger} from './get-random-integer.js';

export const getAuthor = () => {
  let randomAuthorIndex = getRandomInteger(1, 10);
  if (randomAuthorIndex.toString().length !== 2) {
    randomAuthorIndex = `0${ randomAuthorIndex }`;
  }

  return {
    avatar: (`img/avatars/user${ randomAuthorIndex }.png`),
  };
};
