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

/**
 * Функция находит контент первого элемента шаблона(id)
 * @param {string} id
 */
const finedTemplate = (id = '') => {
  const template = document.getElementById(id);

  if (!template) {
    throw new Error(`Template not found: #${id}`);
  }

  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error(`Elements is not а template: #${id}`);
  }

  return template.content.firstElementChild;
};

/**
 * Функция рендерит массив данных в контейнер
 * @template Item
 * @param {Item[]} items
 * @param {(item: Item) => HTMLElement} makeElement
 * @param {HTMLElement} container
 */
const renderPack = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => fragment.appendChild(makeElement(item)));
  container.appendChild(fragment);
};

export {
  getRandomInteger,
  getRandomArrayElement,
  getSrc,
  finedTemplate,
  renderPack
};
