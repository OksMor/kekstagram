import { finedTemplate } from './util.js';
// Если без createDocumentFragment
// import { renderPack } from './util.js';

const templateElement = finedTemplate('picture');
const containerElement = document.querySelector('.pictures');

const createPhoto = (photo) => {
  const miniature = templateElement.cloneNode(true);
  miniature.dataset.id = photo.id;

  const imageElement = miniature.querySelector('.picture__img');
  const commentsCountElement = miniature.querySelector('.picture__comments');
  const likesCountElement = miniature.querySelector('.picture__likes');

  imageElement.src = photo.url;
  imageElement.alt = photo.description;
  commentsCountElement.textContent = photo.comments.length;
  likesCountElement.textContent = photo.likes;

  return miniature;
};

// const renderPhotos = (photos) => renderPack(photos, createPhoto, container);
const renderPhotos = (photos) => containerElement.append(...photos.map(createPhoto));

export {
  renderPhotos
};


