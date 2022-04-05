const bigPicture = document.querySelector('.big-picture');
const picImage = bigPicture.querySelector('.big-picture__img');
const likesNumber = bigPicture.querySelector('.likes-count');
const comments = bigPicture.querySelector('.comments-count');
const social = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.body;

const generateCommentList = (src, alt, commentText) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.src = src;
  image.alt = alt;
  image.width = '35';
  image.height = '35';
  comment.append(image);
  const text = document.createElement('p');
  text.textContent = commentText;
  text.classList.add('social__caption');
  comment.append(text);
  return comment;
};

export const openBigPicture = ({descr, comment, like, url}) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialComments.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  picImage.src = url;
  description.textContent = descr;
  likesNumber.textContent = like;
  comments.textContent = comment;
  comment.forEach((data) => {
    const {name, message, avatar} = data;
    const commentNode = generateCommentList(avatar, name, message);
    social.append(commentNode);
  });
};

export const closeBigPictureButton = document.querySelector('.big-picture__cancel  cancel');

export {body, bigPicture};
