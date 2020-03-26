'use strict';
let btn = document.getElementById('btn');

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function declOfNum(n, titles) {
  return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayHint(n, m) {
  let text;

  if (750 <= n-m && n-m <= 1000) {
    text = 'и близко не угадал!';
  } else if (500 <= n-m && n-m <= 750) {
    text = 'холодно!';
  } else if (250 <= n-m && n-m <= 500) {
    text = 'тепло!';
  } else if (100 <= n-m && n-m <= 250) {
    text = 'горячо!';
  } else if (50 <= n-m && n-m <= 100) {
    text = 'почти угадал число в пределах 100';
  } else if (10 <= n-m && n-m <= 50) {
    text = 'почти угадал число в пределах 50';
  } else if (1 <= n-m && n-m <= 10) {
    text = 'почти угадал число в пределах 10';
  } else {
    text = 'число за пределами загадки.';
  }
  return text;
}

btn.onclick = function() {
  let randomNumber = getRandomIntInclusive(1, 1000),
      counter = 0;
  alert('Угадай число от 1 до 1000!');

  console.log(randomNumber);

  while (true) {
    let userNumber = prompt('Введите число', '');

    counter++;

    if (!isNumeric(userNumber)) {
      if (userNumber === null) {
        break;
      } else if (userNumber === '') {
        alert('Ничего не ввели');
      } else {
        alert('Это не число');
      }
    } else {
      if (randomNumber > userNumber) {
        alert ('Загаданное число больше, сейчас ' + displayHint(randomNumber, userNumber));
      } else if (randomNumber < userNumber) {
        alert ('Загаданное число меньше, сейчас ' + displayHint(userNumber, randomNumber));
      } else {
        alert ('Поздравляю ты угадал! Тебе потребовалось ' + counter + ' ' + declOfNum(counter, ['попытка', 'попытки', 'попыток']) + '!');
        counter = 0;
        break;
      }
    }
  }
}
