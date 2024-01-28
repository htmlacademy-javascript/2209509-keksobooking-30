const picturesInput = document.querySelector('#images');
const picturesContainer = document.querySelector('.ad-form__upload');
const avatarInput = document.querySelector('#avatar');
const avatarContainer = document.querySelector('.ad-form-header__preview');

const initPictures = function() {
  picturesContainer.addEventListener('change', () => {
    const selectedPicture = picturesInput.files[0];
    picturesContainer.src = URL.createObjectURL(selectedPicture);
  });

  picturesInput.addEventListener('change', () => {
    const existingPics = picturesContainer.querySelectorAll('#images');
    for (const existingPic of existingPics) {
      existingPic.remove();
    }
    const apartmentPictures = picturesInput.files;
    for (const apartmentPicture of apartmentPictures){
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('images');
      const newImg = document.createElement('img');
      newImg.classList.add('picture');
      newImg.src = URL.createObjectURL(apartmentPicture);
      imgContainer.appendChild(newImg);

      picturesContainer.appendChild(imgContainer);
    }
  });
};

const initAvatar = function() {
  avatarContainer.addEventListener('change', () => {
    const selectedAvatar = avatarInput.files[0];
    avatarContainer.src = URL.createObjectURL(selectedAvatar);
  });

  avatarInput.addEventListener('change', () => {
    const existingPics = avatarContainer.querySelectorAll('#avatar');
    for (const existingPic of existingPics) {
      existingPic.remove();
    }
    const apartmentAvatares = avatarInput.files;
    for (const apartmentAvatar of apartmentAvatares){
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('avatar');
      const newImg = document.createElement('img');
      newImg.classList.add('picture');
      newImg.src = URL.createObjectURL(apartmentAvatar);
      imgContainer.appendChild(newImg);

      avatarContainer.appendChild(imgContainer);
    }
  });
};

export {initPictures, initAvatar};
