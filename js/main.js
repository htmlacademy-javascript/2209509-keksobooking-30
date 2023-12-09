import {getRandomInteger} from './get-random-integer.js';
import {author} from './author.js';
import {offer} from './offer.js';
import {location} from './location.js';

const similarAuthor = () => Array.from(
  { length: 1 },
  (_, pictureIndex) => author(pictureIndex + 1),
);

const similarOffer = () => Array.from(
  { length: 1 },
  (_, pictureIndex) => offer(pictureIndex + 1),
);

const similarLocation = () => Array.from(
  { length: 1 },
  (_, pictureIndex) => location(pictureIndex + 1),
);

const similarObject = () => {
  const authorIndex = similarAuthor();
  const offerIndex = similarOffer();
  const locationIndex = similarLocation();

  return {
    author: authorIndex,
    offer: offerIndex,
    location: locationIndex,
  };
};

export const similarArrey = Array.from({length: getRandomInteger(1, 10)}, similarObject);

//console.log(similarArrey);
