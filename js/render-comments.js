import { finedTemplate } from './util.js';

const bigPhotoElement = document.querySelector('.big-picture');
const totalCommentCountElement = bigPhotoElement.querySelector('.social__comment-total-count');
const showCommentCountElement = bigPhotoElement.querySelector('.social__comment-shown-count');
const commentsLoaderCountElement = bigPhotoElement.querySelector('.social__comments-loader');

const templateElement = finedTemplate('comment');
const containerElement = document.querySelector('.social__comments');

let commentsArray = [];
let currentCount = 0;
const STEP = 5;

const createComment = (comment) => {
  const socialComment = templateElement.cloneNode(true);
  socialComment.dataset.id = comment.id;

  const avatarElement = socialComment.querySelector('.social__picture');
  const textElement = socialComment.querySelector('.social__text');

  avatarElement.src = comment.avatar;
  textElement.textContent = comment.message;

  return socialComment;
};

const renderCurrentCountComment = () => {
  const count = commentsArray.length;
  containerElement.append(...commentsArray.map(createComment).slice(currentCount, currentCount + STEP));

  currentCount += STEP;
  totalCommentCountElement.textContent = count;
  showCommentCountElement.textContent = count < currentCount ? count : currentCount;

  if (count <= currentCount) {
    commentsLoaderCountElement.classList.add('hidden');
  }

};

const renderComments = (comments) => {
  commentsArray = comments;

  renderCurrentCountComment();
  commentsLoaderCountElement.addEventListener('click', renderCurrentCountComment);
};

const clearComments = () => {
  containerElement.innerHTML = '';
  currentCount = 0;
  commentsArray = [];
  commentsLoaderCountElement.classList.remove('hidden');
  commentsLoaderCountElement.removeEventListener('click', renderCurrentCountComment);
};

export {
  renderComments, clearComments
};
