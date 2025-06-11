import {
  getRandomInteger,
  getRandomArrayElement,
  getSrc
} from './util.js';

const PHOTO_COUNT = 25;

let photoId = 1;
const PHOTO_URL = {
  srcBase: 'photos/',
  srcType: '.jpg'
};
const PHOTO_DESCRIPTIONS = [
  'описание 1',
  'описание 2',
  'описание 3',
  'описание 4',
  'описание 5'
];
const PHOTO_LIKES = {
  min: 1,
  max: 200
};
const COMMENT_COUNT = {
  min: 0,
  max: 30
};

let commentId = 1;
const AUTHOR_AVATAR = {
  from: 1,
  to: 6,
  srcBase: 'img/avatar-',
  srcType: '.svg'
};
const AUTHOR_NAMES = ['Иван', 'Анна', 'Сергей', 'Елена', 'Михаил', 'Ольга'];
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

/**
 * Функция генерирует комментарий
 * @returns {object}
 */
const createComment = () => {
  const newObject = {
    id: commentId++,
    avatar: getSrc(getRandomInteger(AUTHOR_AVATAR.from, AUTHOR_AVATAR.to), AUTHOR_AVATAR.srcBase, AUTHOR_AVATAR.srcType),
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(AUTHOR_NAMES),
  };
  return newObject;
};

/**
 * Функция генерирует фотографию
 * @returns {object}
 */
const createPhoto = () => {
  const newObject = {
    id: photoId,
    url: getSrc(photoId, PHOTO_URL.srcBase, PHOTO_URL.srcType),
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(PHOTO_LIKES.min, PHOTO_LIKES.max),
    comments: Array.from({length: getRandomInteger(COMMENT_COUNT.min, COMMENT_COUNT.max)}, createComment),
  };
  photoId++;
  return newObject;
};

/**
 * Функция генерирует массив объектов (фотографий)
 * @returns {array}
 */
const getPhotos = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export {
  getPhotos
};
