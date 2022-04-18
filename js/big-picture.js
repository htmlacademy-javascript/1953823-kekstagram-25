import {toggleVisibleBigPicture} from './util.js';

const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const picImage = bigPicture.querySelector('.big-picture__img  img');
const likesNumber = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const social = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeBigPictureButton = bigPicture.querySelector('.cancel');

let i = 5;

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

export const openBigPicture = ({description, comments, likes, url}) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  social.innerHTML = '';
  picImage.src = url;
  socialCaption.textContent = description;
  likesNumber.textContent = likes;
  commentsCount.textContent = comments;
  socialComments.textContent = '';
  socialComments.textContent = `5 из ${  comments.length} комментариев`;
  commentsLoader.classList.remove('hidden');
  if (comments.length <= 5) {
    socialComments.textContent = `${comments.length} из ${comments.length} комментариев`;
    commentsLoader.classList.add('hidden');
  }
  comments.forEach((data, commentNumber) => {
    const {name, message, avatar} = data;
    const commentNode = generateCommentList(avatar, name, message);
    if (commentNumber > 4) {
      commentNode.style.display = 'none';
      socialComments.textContent = `5 из ${  comments.length} комментариев`;
    }
    social.append(commentNode);
  });
  toggleVisibleBigPicture(true, 'hidden');
};

commentsLoader.addEventListener('click', () => {
  const elements = social.children;
  if (elements.length-i <= 5) {
    socialComments.textContent = `${elements.length  } из ${  elements.length} комментариев`;
    commentsLoader.classList.add('hidden');
    for (let j=elements.length-i; j>0; j--) {
      const el = elements[elements.length-j];
      el.style.display = 'flex';
    }
  }
  else {
    socialComments.textContent = `${i+5  } из ${  elements.length} комментариев`;
    const el1 = elements[i];
    const el2 = elements[i+1];
    const el3 = elements[i+2];
    const el4 = elements[i+3];
    const el5 = elements[i+4];
    el1.style.display = 'flex';
    el2.style.display = 'flex';
    el3.style.display = 'flex';
    el4.style.display = 'flex';
    el5.style.display = 'flex';
  }
  i+=5;
});

closeBigPictureButton.addEventListener('click', () => {
  i = 5;
});

export {body, bigPicture, closeBigPictureButton};
