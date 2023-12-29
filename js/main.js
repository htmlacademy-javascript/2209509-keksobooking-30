import {author} from './author.js';
import {offer} from './offer.js';
import {location} from './location.js';
import {renderThumbnails} from './thumbnaiil.js';

const similarAuthor = () => (author());

const similarOffer = () => offer();

const similarLocation = () => location();

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

export const similarArray = () => Array.from({length: 10}, similarObject);

renderThumbnails(similarArray());

console.log(similarArray);
