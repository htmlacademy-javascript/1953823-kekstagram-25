import './load-image.js';
import './scale.js';
import './effects.js';
import {photoDescriptions} from './data.js';
import {generateCard} from './photos.js';
import {openBigPicture} from './big-picture.js';
import {closeBigPicture} from './util.js';

const photosWrapper = document.querySelector('.pictures');

photoDescriptions.forEach((photo) => {
  const photoNode = generateCard(photo);
  photoNode.addEventListener('click', () => {
    openBigPicture(photo);
  });
  photosWrapper.append(photoNode);
});

const closeBigPictureClick = (evt) => {
  const element = evt.target;
  if (element.closest('.cancel')) {
    closeBigPicture();
  }
};

const closeBigPictureEsc = (evt) => {
  const key = evt.keyCode;
  if (key === 27) {
    closeBigPicture();
  }
};

document.addEventListener('click', closeBigPictureClick);
document.addEventListener('keydown', closeBigPictureEsc);
