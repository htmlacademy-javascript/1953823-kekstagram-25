const getRandomInt = function (a, b) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

getRandomInt(1,6);

const checkLength = function (checkedString, maxLength) {
  return checkedString.length <= maxLength;
};

checkLength('Проверка', 1);

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const generateNumbers = (start, end) => new Array(end - start + 1).fill().map(() => start++);

const ID = generateNumbers(1,25);

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Анна',
  'Максим',
  'Нина',
  'Вячеслав',
  'Ксения',
  'Антонина',
];

const DESCRIPTIONS = [
  'Пляж',
  'Указатель',
  'Океан',
  'Девушка на пляже',
  'Рисовые человечки',
  'Машина мечты',
  'Клубнчки',
  'Морс',
  'Самолет',
  'Обувь',
  'Дорога к морю',
  'Авто',
  'Здоровое питание',
  'Кексоролл',
  'Тапочки',
  'Небо',
  'Хор',
  'Ретро-авто',
  'Светлячки',
  'Пальмы',
  'Вкуснотища',
  'Закат',
  'Краб',
  'Концерт',
  'Переправа',
];

const PHOTO_AMOUNT = 25;

const getCommentId = (min, max, number) => {
  const IDS = [];
  while (IDS.length < number) {
    const commentId = getRandomPositiveInteger(min, max);
    if (!IDS.includes(commentId)) {
      IDS.push(commentId);
    }
  }
  return IDS;
};

const createComment = () => ({
  id: getRandomArrayElement(getCommentId(1000, 2000, 100)),
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const SIMILAR_COMMENTS_AMOUNT = 5;

const createObject = () => ({
  id: getRandomArrayElement(ID),
  url: `photos/${  getRandomArrayElement(ID)  }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({length: SIMILAR_COMMENTS_AMOUNT}, createComment),
});

const photoDescriptions = Array.from({length: PHOTO_AMOUNT}, createObject);

photoDescriptions();
