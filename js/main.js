import { arrayPhotos } from './data.js';
import { renderPhotos } from './render-photos.js';
import { openFullPhoto } from './open-full-photo.js';

renderPhotos(arrayPhotos);

const picturesElement = document.querySelector('.pictures');

picturesElement.addEventListener('click', (evt) => {
  // используется для нахождения ближайшего родительского элемента, соответствующего заданному CSS-селектору, начиная с элемента, на котором произошло событие
  const currentElement = evt.target.closest('.picture');

  if (currentElement) {
    evt.preventDefault();
    const currentPhoto = arrayPhotos.find((photo) => photo.id === Number(currentElement.dataset.id));
    openFullPhoto(currentPhoto);
  }

});
