// Создаем регулярное выражение для проверки email
const emailRegex = /^gertad@mail\.ru$/;

// Получаем элемент ввода email
const emailInput = document.getElementById('emailInput');

// Добавляем обработчик события input для поля ввода email
emailInput.addEventListener('input', function() {
  // Проверяем значение поля email на соответствие регулярному выражению
  const isValidEmail = emailRegex.test(this.value);

  // Выводим результат проверки в консоль
  console.log(`Адрес ${isValidEmail ? 'верный' : 'неверный'}`);
});
// ---------------------------------------------------

function replaceSpacesWithUnderscores(str) {
    // Используем метод replace() с регулярным выражением для замены всех пробелов на знак подчеркивания
    return str.replace(/\s+/g, '_');
}

// Пример использования функции
const inputString = 'Найти своё призвание непросто, особенно когда нет понимания, в каком направлении двигаться и где искать дело всей своей жизни.';
const stringWithUnderscores = replaceSpacesWithUnderscores(inputString);

console.log(stringWithUnderscores);

// ---------------------------------------------------

console.log("Рак машина Радуга стол ремесло".match(/(Р)+/g));

// ---------------------------------------------------
function checkDateFormat() {
    // Получаем значение из поля ввода
    const dateString = document.getElementById('dateInput').value;
  
    // Создаем регулярное выражение для проверки формата даты гггг-мм-дд
    const regex = /^(?:19|20)\d\d-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1]))$/;
  
    // Проверяем соответствие строки регулярному выражению
    if (regex.test(dateString)) {
      document.getElementById('resultMessage').innerText = 'Строка является датой в формате гггг-мм-дд';
    } else {
      document.getElementById('resultMessage').innerText = 'Строка не соответствует формату гггг-мм-дд или неверные значения месяца/дня';
    }
  }

//   ---------------------------------------------------

const text = "Это текст с некоторыми латинскими словами, такими как: hello, world, and apple.";

const regex = /\b[A-Za-z]+\b/g;

const matches = text.match(regex);

console.log(matches);
//   ---------------------------------------------------


const text_2 = "Позновательные сайты https://www.novochag.ru, развлекательный канал https://www.youtube.com";

const regex_2 = /\bhttps?:\/\/\S+\b/g;

const matches_2 = text_2.match(regex_2);

console.log(matches_2);
const urls = ['https', 'www', 'novochag', 'ru', ' ', 'https', 'www', 'youtube', 'com'];
const urlStr = urls.join('.');
console.log(urlStr); 


//   ---------------------------------------------------

const text_3 = "Массаж может выполняться как профессиональным массажистом в специальных местах, таких как салоны красоты или медицинские учреждения, а также может быть применен в домашних условиях для ухода за здоровьем и благополучием.";
// Разделяем текст на слова
const words = text_3.split(/\s+/);
// Массив для хранения слов, оканчивающихся на букву "м"
const wordsEndingWithM = [];
// Проходим по каждому слову и проверяем его на окончание буквой "м"
words.forEach(word => {
    if (word.endsWith('м')) {
        wordsEndingWithM.push(word);
    }
});
// Выводим результаты
if (wordsEndingWithM.length > 0) {
    console.log("Слова, оканчивающиеся на 'м':");
    console.log(wordsEndingWithM.join(', '));
} else {
    console.log('Слова, оканчивающиеся на "м", не найдены.');
}

//   ---------------------------------------------------

console.log("Это #текст с #некоторыми #хэштегами и #хэштегами2.".match(/#/g));