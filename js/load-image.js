const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'heic'];

import {isEscapeKey} from './util.js';
import {validateForm} from './validation.js';
import {effectsLevel} from './effects.js';
import {imagePreview, scaleInput, DEFAULT_VALUE} from './scale.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const imageEditing = document.querySelector('.img-upload__overlay');
const textHashtags = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');
const uploadCancel = document.querySelector('#upload-cancel');
const fileChooser = document.querySelector('.img-upload__input');

const uploadImage = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  scaleInput.value = `${DEFAULT_VALUE}%`;
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imagePreview.style.filter = 'none';
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.transform = `scale(${(parseInt(scaleInput.value, 10)/100)})`;
  }
};

//Открытие формы редактирования изображения
const openOverlay = (evt) => {
  imageEditing.classList.remove('hidden');
  body.classList.add('modal-open');
  effectsLevel.classList.add('hidden');
  uploadImage(evt);
};

//Закрытие формы редактирования изображения
const closeOverlay = () => {
  imageEditing.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
};

//Если фокус находится в поле ввода хэш-тега или комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения
const pressEscOnImg = (evt) =>{
  if(isEscapeKey(evt) && evt.target !== textHashtags && evt.target !== comments) {
    evt.preventDefault();
    closeOverlay(pressEscOnImg);
  }
};

// Функция для закрытия формы
const clickCancel = () => {
  closeOverlay(pressEscOnImg);
};

//Загрузка изображения
const imageUpload = () => {
  openOverlay();
  body.addEventListener ('keydown', pressEscOnImg);
  uploadCancel.addEventListener('click', clickCancel);
};

// Загрузка файла и проверка формы на валидность
const uploadFileImage = () => {
  uploadFile.addEventListener('change', imageUpload);
  validateForm();
};

uploadFileImage();

export {clickCancel};
