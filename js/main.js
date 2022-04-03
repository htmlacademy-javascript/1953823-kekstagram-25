import {photoDescriptions} from './data.js';
import {generateCard} from './photos.js';

const photosWrapper = document.querySelector('.pictures');

photoDescriptions.forEach((photo) => {
  const photoNode = generateCard(photo);
  photosWrapper.append(photoNode);
});
