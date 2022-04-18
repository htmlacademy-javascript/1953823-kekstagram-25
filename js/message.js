import {isEscapeKey} from './util.js';

const error = document.querySelector('#error').content.querySelector('.error');
const success = document.querySelector('#success').content.querySelector('.success');

let keydownListener;
let clickListener;

let loadError;

const removeListeners = () => {
  document.removeEventListener('keydown', keydownListener);
  document.removeEventListener('click', clickListener);
};

const showErrorMessage = () => {
  const errorMessage = error.cloneNode(true);
  const errorTitle = errorMessage.querySelector('.error__title');
  const errorButton = errorMessage.querySelector('.error__button');

  if (loadError) {
    errorTitle.textContent = 'Ошибка загрузки данных';
    errorButton.textContent = 'Ок';
  }

  const closeErrorMessage = () => {
    document.body.removeChild(errorMessage);
    removeListeners();
  };

  const pressImageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  };

  keydownListener = pressImageEscKeydown;

  const getClick = (evt) => {
    if (evt.target === errorButton || !evt.target.closest('.error__inner')) {
      closeErrorMessage();
    }
  };

  clickListener = getClick;
  document.addEventListener('keydown', keydownListener);
  document.addEventListener('click', clickListener);
  document.body.appendChild(errorMessage);
};

const showDownloadErrorMessage = () => {
  loadError = true;
  showErrorMessage();
};

const showUploadErrorMessage = () => {
  loadError = false;
  showErrorMessage();
};

const showSuccessMessage = () => {
  const successMessage = success.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  const closeSuccessMessage = () => {
    document.body.removeChild(successMessage);
    removeListeners();
  };

  const pressImageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  };

  keydownListener = pressImageEscKeydown;

  const getClick = (evt) => {
    if (evt.target === successButton || !evt.target.closest('.success__inner')) {
      closeSuccessMessage();
    }
  };

  clickListener = getClick;
  document.addEventListener('keydown', keydownListener);
  document.addEventListener('click', clickListener);
  document.body.appendChild(successMessage);
};

export {showDownloadErrorMessage, showUploadErrorMessage, showSuccessMessage};
