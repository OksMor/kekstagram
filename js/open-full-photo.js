import { arrayPhotos } from './data.js';
import { renderComments } from './render-comments.js';

const bigPhotoElement = document.querySelector('.big-picture');

const exitElement = bigPhotoElement.querySelector('.big-picture__cancel');
const imageElement = bigPhotoElement.querySelector('.big-picture__img').querySelector('img');
const descriptionElement = bigPhotoElement.querySelector('.social__caption');
const likesElement = bigPhotoElement.querySelector('.likes-count');
const totalCommentCountElement = bigPhotoElement.querySelector('.social__comment-total-count');
const showCommentCountElement = bigPhotoElement.querySelector('.social__comment-shown-count');

const commentCountElement = bigPhotoElement.querySelector('.social__comment-count');
const commentsLoaderCountElement = bigPhotoElement.querySelector('.social__comments-loader');

const onExitClick = () => {
  closeBifPhoto();
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBifPhoto();
  }
};

function closeBifPhoto() {
  bigPhotoElement.classList.add('hidden');
  document.body.classList.remove('.modal-open');

  exitElement.removeEventListener('click', onExitClick);
  document.removeEventListener('keydown', onEscKeydown);
}


const openFullPhoto = (photoId) => {
  const currentPhoto = arrayPhotos.find((photo) => photo.id === Number(photoId));
  // console.log(currentPhoto.comments);
  renderComments(currentPhoto.comments);

  document.body.classList.add('.modal-open');
  bigPhotoElement.classList.remove('hidden');

  imageElement.src = currentPhoto.url;
  descriptionElement.textContent = currentPhoto.description;
  likesElement.textContent = currentPhoto.likes;
  totalCommentCountElement.textContent = currentPhoto.comments.length;
  showCommentCountElement.textContent = currentPhoto.comments.length;

  commentCountElement.classList.add('hidden');
  commentsLoaderCountElement.classList.add('hidden');
  exitElement.addEventListener('click', closeBifPhoto);
  document.addEventListener('keydown', onEscKeydown);
};

export { openFullPhoto };
/*
    <section class="big-picture  overlay  hidden">
      <h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
      <div class="big-picture__preview">

        <!-- Просмотр изображения -->
        <div class="big-picture__img">
          <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600">
        </div>

        <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
        <div class="big-picture__social  social">
          <div class="social__header">
            <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
            <p class="social__caption">Тестим новую камеру! =)</p>
            <p class="social__likes">Нравится <span class="likes-count">356</span></p>
          </div>

          <!-- Комментарии к изображению -->
          <div class="social__comment-count"><span class="social__comment-shown-count">5</span> из <span class="social__comment-total-count">125</span> комментариев</div>
          <ul class="social__comments">

          </ul>

          <!-- Кнопка для загрузки новой порции комментариев -->
          <button type="button" class="social__comments-loader  comments-loader">Загрузить еще</button>

          <!-- Форма для отправки комментария -->
          <div class="social__footer">
            <img class="social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35">
            <input type="text" class="social__footer-text" placeholder="Ваш комментарий...">
            <button type="button" class="social__footer-btn" name="button">Отправить</button>
          </div>
        </div>

        <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
        <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
      </div>
    </section>
*/
