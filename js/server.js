export const fetchResult = fetch('https://30.javascript.htmlacademy.pro/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json());

export const createModal = () => {
  const ModalTemplate = document.querySelector('#success').content.querySelector('.success');
  const popupElement = ModalTemplate.cloneNode(true);

  popupElement.querySelector('.success__message');

  return popupElement;
};

createModal();
