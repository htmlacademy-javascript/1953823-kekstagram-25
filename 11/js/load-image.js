import {isEscapeKey} from './util.js';
import {onFormValidation} from './validation.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const imageEditing = document.querySelector('.img-upload__overlay');
const textHashtags = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');

//Открытие формы редактирования изображения
const onOverlayOpen = () => {
  imageEditing.classList.remove('hidden');
  body.classList.add('modal-open');
};

//Закрытие формы редактирования изображения
const onOverlayClose = () => {
  imageEditing.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
};

//Если фокус находится в поле ввода хэш-тега или комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения
const onImgEscPress = (evt) =>{
  if(isEscapeKey(evt) && evt.target !== textHashtags && evt.target !== comments) {
    evt.preventDefault();
    onOverlayClose(onImgEscPress);
  }
};

// Функция для закрытия формы
const onCancelClick = () => {
  onOverlayClose(onImgEscPress);
};

//Загрузка изображения
const imageUpload = () => {
  onOverlayOpen();
  body.addEventListener ('keydown', onImgEscPress);
  uploadCancel.addEventListener('click', onCancelClick);
};

// Загрузка файла и проверка формы на валидность
const uploadFileImage = () => {
  uploadFile.addEventListener('change', imageUpload);
  onFormValidation();
};

uploadFileImage();
