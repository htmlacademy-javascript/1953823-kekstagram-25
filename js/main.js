import './load-image.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import {showFilteredPictures} from './filter.js';
import {renderPictures} from './photos.js';

getData((photos) => {
  renderPictures(photos);
  showFilteredPictures(photos);
});
