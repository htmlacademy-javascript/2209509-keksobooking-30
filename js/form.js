document.querySelector('.ad-form');

const formDisabled = () => {
  document.querySelector('form').classList.add('map__filters--disabled');

  document.querySelector('.ad-form').classList.add('ad-form--disabled');
};

formDisabled();
