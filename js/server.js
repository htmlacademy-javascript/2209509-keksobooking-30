export const fetchResult = fetch('https://30.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));

export const createModal = () => {
  const ModalTemplate = document.querySelector('#success').content.querySelector('.success');
  const popupElement = ModalTemplate.cloneNode(true);

  popupElement.querySelector('.success__message');

  return popupElement;
};

createModal();
