/**
 * Функция для проверки длины строки
 * @param {string} string - строка
 * @param {number} maxSymbol - максимальное число знаков
 * @returns {boolean}
 */
const checkStringLength = (string = '', maxSymbol = 1) => string.length <= maxSymbol;
checkStringLength('qwert', 5);

/**
 * Функция для проверки, является ли строка палиндромом
 * @param {*} string - строка
 * @returns {boolean}
 */
const isPalindrome = (string = '') => {
  const normalizedString = string.replaceAll(/\s+/g, '').toLowerCase(); // убирает все пробелы, переносы каретки

  return normalizedString === [...normalizedString].reverse().join('');
};
isPalindrome('tt tt t');

/**
 * Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
 * @param {*} str - строка
 * @returns {number|NaN}
 */
function stringToNumber(str = '') {
  return Number(
    [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN
  );
}
stringToNumber('tttt1');

/**
 * Та же функция
 * @param {*} string -строка
 * @returns {number|NaN}
 */
const extractNumbers = (string = '') => parseInt(string.replace(/\D+/g, ''), 10); // убрать все не числа
extractNumbers('2ф-597');
