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

/**
 * Функция перевода времени в минуты после полуночи
 * @param {string} str - время в формате h:m
 * @returns {number}
 */
const convertTime = (str) => {
  const minutes = str.split(':').map(Number);
  return minutes[0] * 60 + minutes[1];
};

/**
 * Функция проверки входит ли время встречи в период рабочего времени
 * @param {string} from - начало рабочего дня
 * @param {string} to - конец рабочего дня
 * @param {string} start - начало встречи
 * @param {number} duration - продолжительность встречи в минутах
 * @returns {boolean}
 */
const isDuring = (from , to, start, duration) => {
  const fromDay = convertTime(from);
  const toDay = convertTime(to);
  const startMeeting = convertTime(start);
  const durationMeeting = duration;

  return fromDay <= startMeeting && (startMeeting + durationMeeting) <= toDay;
};

isDuring('08:00', '17:30', '14:00', 90); // true
isDuring('8:0', '10:0', '8:0', 120); // true
isDuring('08:00', '14:30', '14:00', 90); // false
isDuring('14:00', '17:30', '08:0', 90); // false
isDuring('8:00', '17:30', '08:00', 900); // false
