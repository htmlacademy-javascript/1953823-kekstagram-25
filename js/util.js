const TIME_OUT_DELAY_VALUE = 500;

import {body, bigPicture} from './big-picture.js';

export const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomUniqueElements = (arr) => {
  const newArray = arr.slice();
  const elements = [];
  const newArrayLength = arr.length;
  for (let i = 0; i < newArrayLength; i++) {
    const randomId = getRandomPositiveInteger(0, newArray.length - 1);
    elements.push(newArray[randomId]);
    newArray.splice(randomId, 1);
  }
  return elements;
};

export const getTemplate = (templateID, contentTag) => {
  const template = document.querySelector(templateID).content;
  const content = template.querySelector(contentTag);
  const clonedContent = content.cloneNode(true);
  return clonedContent;
};

export const closeBigPicture = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const toggleVisibleBigPicture = (flag, className) => {
  const action = flag ? 'remove': 'add';
  bigPicture.classList[action](className);
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

export const debounce = (callback, timeoutDelay = TIME_OUT_DELAY_VALUE) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
