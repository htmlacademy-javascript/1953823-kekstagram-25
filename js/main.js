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
