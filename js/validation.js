import {createModal} from './server.js';

const mainForm = document.querySelector('.ad-form');
const titleOffer = document.getElementById('title');
const priceOffer = document.getElementById('price');
const typeOffer = document.getElementById('type');
priceOffer.placeholder = '1000';

let MIN_PRICE = 1000;
const MAX_PRICE = 100000;
typeOffer.addEventListener('change', () => {
  if (typeOffer.value === 'flat') {
    MIN_PRICE = 1000;
    priceOffer.placeholder = '1000';
  } else if (typeOffer.value === 'bungalow') {
    MIN_PRICE = 0;
    priceOffer.placeholder = '0';
  } else if (typeOffer.value === 'hotel') {
    MIN_PRICE = 3000;
    priceOffer.placeholder = '3000';
  } else if (typeOffer.value === 'house') {
    MIN_PRICE = 5000;
    priceOffer.placeholder = '5000';
  } else if (typeOffer.value === 'palace') {
    MIN_PRICE = 10000;
    priceOffer.placeholder = '10000';
  }
});

const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');
timeIn.addEventListener('change', () => {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00';
  } else if (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else if (timeIn.value === '14:00') {
    timeOut.value = '14:00';
  }
});

timeOut.addEventListener('change', () => {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00';
  } else if (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else if (timeOut.value === '14:00') {
    timeIn.value = '14:00';
  }
});

const pristine = new Pristine(mainForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'notice--error'
});

const titleOfferValidate = () => {
  if (titleOffer.value.length >= 30 && titleOffer.value.length < 100) {
    return true;
  }
};

const priceOfferValidate = () => {
  if (priceOffer.value <= MAX_PRICE && priceOffer.value >= MIN_PRICE) {
    return true;
  }
};

const roomOffer = document.getElementById('room_number');
const guestOffer = document.getElementById('capacity');
const oneRoomValidate = () => {
  if (roomOffer.value === '1') {
    if (guestOffer.value === '1') {
      return true;
    }
  }

  if (roomOffer.value === '2') {
    if (guestOffer.value === '1' || guestOffer.value === '2') {
      return true;
    }
  }

  if (roomOffer.value === '3') {
    if (guestOffer.value === '1' || guestOffer.value === '2' || guestOffer.value === '3') {
      return true;
    }
  }

  if (roomOffer.value === '100') {
    if (guestOffer.value === '0') {
      return true;
    }
  }
};

pristine.addValidator(
  titleOffer,
  titleOfferValidate,
  'Введите корректный заголовок'
);

pristine.addValidator(
  priceOffer,
  priceOfferValidate,
  'Введите корректную цену'
);

pristine.addValidator(
  guestOffer,
  oneRoomValidate,
  'Введите корректное количество комнат или гостей'
);

mainForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

export const openModal = () => {
  if (!pristine.validate(true)) {
    return createModal;
  }
};
