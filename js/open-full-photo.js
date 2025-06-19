import { renderComments, clearComments } from './render-comments.js';

const bigPhotoElement = document.querySelector('.big-picture');
const exitElement = bigPhotoElement.querySelector('.big-picture__cancel');
const imageElement = bigPhotoElement.querySelector('.big-picture__img').querySelector('img');
const descriptionElement = bigPhotoElement.querySelector('.social__caption');
const likesElement = bigPhotoElement.querySelector('.likes-count');

const onExitClick = () => {
  closeBigPhoto();
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPhoto();
  }
};

function closeBigPhoto() {
  clearComments();
  bigPhotoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  exitElement.removeEventListener('click', onExitClick);
  document.removeEventListener('keydown', onEscKeydown);
}


const openFullPhoto = (currentPhoto) => {

  renderComments(currentPhoto.comments);

  document.body.classList.add('modal-open');
  bigPhotoElement.classList.remove('hidden');

  imageElement.src = currentPhoto.url;
  descriptionElement.textContent = currentPhoto.description;
  likesElement.textContent = currentPhoto.likes;

  exitElement.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onEscKeydown);
};

export { openFullPhoto };
