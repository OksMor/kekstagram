import { arrayPhotos } from './data.js';
import { renderPhotos } from './render-photos.js';
import { openFullPhoto } from './open-full-photo.js';

renderPhotos(arrayPhotos);

const pack = document.querySelector('.pictures');

pack.addEventListener('click', (evt) => {
  /* используется для нахождения ближайшего родительского элемента,
   соответствующего заданному CSS-селектору, начиная с элемента, на котором произошло событие*/
  const currentPhoto = evt.target.closest('.picture');
  if (currentPhoto) {
    openFullPhoto(currentPhoto.dataset.id);
  }
});
