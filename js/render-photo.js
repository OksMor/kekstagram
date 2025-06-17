import { finedTemplate } from './util.js';
// Если без createDocumentFragment
// import { renderPack } from './util.js';

const template = finedTemplate('picture');
const container = document.querySelector('.pictures');

const createPhoto = (photo) => {
  const miniature = template.cloneNode(true);
  miniature.dataset.id = photo.id;
  miniature.href = photo.url;

  const image = miniature.querySelector('.picture__img');
  const commentsCount = miniature.querySelector('.picture__comments');
  const likesCount = miniature.querySelector('.picture__likes');

  image.src = photo.url;
  image.alt = photo.description;
  commentsCount.textContent = photo.comments.length;
  likesCount.textContent = photo.likes;

  return miniature;
};

// const renderPhotos = (photos) => renderPack(photos, createPhoto, container);
const renderPhotos = (photos) => container.append(...photos.map(createPhoto));

export {
  renderPhotos
};


