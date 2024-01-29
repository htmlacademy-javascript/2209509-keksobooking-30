import {createModal, fetchResult} from './server.js';
import {initMap} from './map.js';
import {initAvatar, initPicture} from './photo-upload.js';
import {disabledForm} from './disable-form.js';
import {debounce} from './untils.js';
import './slider.js';
import {resetFilter, setChangeEventOnFilter, filterOffers } from './mark-filter.js';
import './validation.js';

createModal();
initAvatar();
initPicture();
resetFilter();
disabledForm();
setChangeEventOnFilter();
filterOffers();
debounce();

fetchResult
  .then(res => {
    initMap(res);
  });
