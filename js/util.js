/**
 * Функция генератор случайного числа из диапазона
 * @param {number} min - минимальное число из диапазона
 * @param {number} max - максимальное число из диапазона
 * @returns {number}
 */
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Функция генератор случайного элемента из массива
 * @param {Array} elements - массив значений
 * @returns {*}
 */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/**
 * Функция генерирующая url картинок
 * @param {number} id - номер картинки
 * @param {string} base - путь / префикс
 * @param {string} type - постфикс / расширение
 * @returns {string}
 */
const getSrc = (id, base, type) => `${base}${id}${type}`;

export {
  getRandomInteger,
  getRandomArrayElement,
  getSrc
};
