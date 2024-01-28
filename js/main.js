import {author} from './author.js';
import {offer} from './offer.js';
import {location} from './location.js';
import {renderThumbnails} from './thumbnaiil.js';
import {createModal, fetchResult} from './server.js';
import {formDisabled} from './form.js';
import {initMap} from './map.js';
import {initPictures, initAvatar} from './photo-upload.js';
import './slider.js';
import './validation.js';

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
createModal();
formDisabled();
initPictures();
initAvatar();

console.log(similarArray);

fetchResult
  .then(res => {
    console.log(res);
    initMap(res);
  });
