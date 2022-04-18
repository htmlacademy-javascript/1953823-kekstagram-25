import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';
import {MESSAGES, DESCRIPTIONS, NAMES} from './constants.js';

const PHOTO_AMOUNT = 25;

const createComment = (_, number) => ({
  id: number,
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createObject = (_, number) => ({
  id: number + 1,
  url: `photos/${number + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({length: getRandomPositiveInteger(1, 35)}, createComment),
});

const photoDescriptions = Array.from({length: PHOTO_AMOUNT}, createObject);

export {photoDescriptions};
