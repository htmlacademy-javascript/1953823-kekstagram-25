import {imagePreview} from './scale.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueSliderElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const effectsLevel = document.querySelector('.effect-level');

//Создание объекта данных с параметрами эффектов
const effects = {
  none: {
    range: {
      min: 0,
      max: 0,
    },
    filter: 'none',
    sign: '',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: 'grayscale',
    sign: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: 'sepia',
    sign: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    filter: 'invert',
    sign: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filter: 'blur',
    sign: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filter: 'brightness',
    sign: '',
  },
};

// Cоздание слайдера для регулировки эффектов
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value)
  }
});

effectsList.addEventListener('change', (evt) => {
  const effect = evt.target.value;
  const effectFilter = effects[effect];
  imagePreview.className = `effects effects__preview--${effect}`;
  if (effect === 'none') {
    imagePreview.style.filter = '';
    effectsLevel.classList.add('hidden');
  } else {
    effectsLevel.classList.remove('hidden');
  }
  sliderElement.noUiSlider.updateOptions(effectFilter);
  sliderElement.noUiSlider.on('update', () => {
    valueSliderElement.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `${effectFilter.filter}(${valueSliderElement.value}${effectFilter.sign})`;
  });
});

export {effectsLevel};
