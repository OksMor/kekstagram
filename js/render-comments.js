import { finedTemplate } from './util.js';

const templateElement = finedTemplate('comment');
const containerElement = document.querySelector('.social__comments');

const createComment = (comment) => {
  const socialComment = templateElement.cloneNode(true);

  const avatarElement = socialComment.querySelector('.social__picture');
  const textElement = socialComment.querySelector('.social__text');

  avatarElement.src = comment.avatar;
  textElement.textContent = comment.message;
  return socialComment;
};

const renderComments = (comments) => containerElement.append(...comments.map(createComment));

export {
  renderComments
};
