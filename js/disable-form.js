document.querySelector('.ad-form');

export const disabledForm = () => {
  document.querySelector('form').classList.remove('map__filters--disabled');
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
};

disabledForm();
