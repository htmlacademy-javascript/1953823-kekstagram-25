const HASHTAGS_AMOUNT = 5;

import {sendData} from './api.js';
import {showUploadErrorMessage, showSuccessMessage} from './message.js';
import {clickCancel} from './load-image.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');
const submitBtn = form.querySelector('.img-upload__submit');

const hash1 = 'Хэштег должен начинаться символа # (решётка), строка после решётки должна состоять из букв и чисел (не более 20 символов) и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
const hash2 = 'Нельзя указать больше пяти хэш-тегов';
const hash3 = 'Один и тот же хэш-тег не может быть использован дважды';

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
}, true);

// Функция для превращения набора хэштегов в массив, вызываем метод filter() на массиве hashtagText и передаём функцию, которая отрабатывает на каждом элементе этого массива
const createHashtagsArray = (hashtagText) => hashtagText.toLowerCase().split(' ').filter((e) => e);

const validateHashtags = (value) => {
  const hashtag = createHashtagsArray(value);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}[\s+]*$/;
  const newHashtags = hashtag.map((hashtags) => re.test(hashtags));
  return !newHashtags.includes(false);
};

pristine.addValidator(textHashtags, validateHashtags, hash1);

const amountHashtags = (value) => {
  const hashtag = createHashtagsArray(value);
  const correctAmmount = hashtag.length <= HASHTAGS_AMOUNT;
  return correctAmmount;
};

pristine.addValidator(textHashtags, amountHashtags, hash2);

const duplicateHashtags = (value) => {
  const hashtag = createHashtagsArray(value);
  const hasUniqueHashtags = hashtag.length === new Set(hashtag).size;
  return hasUniqueHashtags;
};

pristine.addValidator(textHashtags, duplicateHashtags, hash3);

const blockSubmitBtn = () => {
  submitBtn.disabled = true;
  submitBtn.textContent = 'Загружается';
};

const unblockSubmitBtn = () => {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Опубликовать';
};

const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitBtn();
      sendData(
        () => {
          unblockSubmitBtn();
          clickCancel();
          showSuccessMessage();
        },
        () => {
          unblockSubmitBtn();
          clickCancel();
          showUploadErrorMessage();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {validateForm};
