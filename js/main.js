import './load-image.js';
import './scale.js';
import './effects.js';
import {closeBigPicture} from './util.js';
import {getData} from './api.js';
import {showFilteredPictures} from './filter.js';
import {renderPictures} from './photos.js';

getData((photos) => {
  renderPictures(photos);
  showFilteredPictures(photos);
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
