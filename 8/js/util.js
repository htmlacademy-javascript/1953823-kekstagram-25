import {body, bigPicture} from './big-picture.js';

export function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export function checkLength (checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

export const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export const generateNumbers = (start, end) => new Array(end - start + 1).fill().map(() => start++);

export const getTemplate = function (templateID, contentTag) {
  const template = document.querySelector(templateID).content;
  const content = template.querySelector(contentTag);
  const clonedContent = content.cloneNode(true);
  return clonedContent;
};

export const closeBigPicture = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};
