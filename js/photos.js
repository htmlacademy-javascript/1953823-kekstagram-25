import {getTemplate} from './util.js';
import {openBigPicture} from './big-picture.js';

const pictureTemplate = getTemplate('#picture', 'a');
const pictureTitle = document.querySelector('.pictures__title');
const photosWrapper = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

pictureTitle.classList.remove('visually-hidden');

export const generateCard = (photo) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  picture.dataset.id = photo.id;
  picture.addEventListener('click', () => {
    openBigPicture(photo);
  });
  fragment.appendChild(picture);
};

const renderPictures = (photos) => {
  photos.forEach((photo) => {
    generateCard(photo);
  });
  photosWrapper.appendChild(fragment);
};

export {renderPictures};
