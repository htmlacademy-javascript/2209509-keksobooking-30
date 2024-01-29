const picturesInput = document.querySelector('#images');
const picturesContainer = document.querySelector('.ad-form__photo');
const avatarInput = document.querySelector('#avatar');
const avatarContainer = document.querySelector('.ad-form-header__preview');

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
      const avatarWrapper = document.querySelector('.ad-form-header__preview');
      const newAvatar = document.createElement('img');
      newAvatar.classList.add('uploader-avatar');
      newAvatar.src = URL.createObjectURL(apartmentAvatar);

      avatarWrapper.appendChild(newAvatar);
    }
  });
};


const initPicture = function() {
  picturesContainer.addEventListener('change', () => {
    const selectedPicture = picturesInput.files[0];
    avatarContainer.src = URL.createObjectURL(selectedPicture);
  });

  picturesInput.addEventListener('change', () => {
    const existingPics = picturesContainer.querySelectorAll('#images');
    for (const existingPic of existingPics) {
      existingPic.remove();
    }
    const apartmentPictures = picturesInput.files;
    for (const apartmentPicture of apartmentPictures){
      const pictureWrapper = document.querySelector('.ad-form__photo');
      const newPicture = document.createElement('img');
      newPicture.classList.add('uploader-pic');
      newPicture.src = URL.createObjectURL(apartmentPicture);

      pictureWrapper.appendChild(newPicture);
    }
  });
};

export { initAvatar, initPicture};
