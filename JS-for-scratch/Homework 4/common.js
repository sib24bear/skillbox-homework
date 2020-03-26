'use strict'
let exe1 = document.getElementById('exercise-1'),
    exe2 = document.getElementById('exercise-2');

var users = [{
    name: 'Иван',
    login: 'Ivan123',
    password: 'qwerty'
  },
  {
    name: 'Олег',
    login: 'Oleg456',
    password: 'asdfg'
  },
  {
    name: 'Андрей',
    login: 'Andrey789',
    password: 'zxcvb'
  }
];

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function declOfNum(n, titles) {
  return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

exe1.onclick = function() {
  function getWeekdayName(weekNum) {
    switch (weekNum) {
      case 0:
        return ('воскресенье');
      case 1:
        return ('понедельник');
      case 2:
        return ('вторник');
      case 3:
        return ('среда');
      case 4:
        return ('четверг');
      case 5:
        return ('пятница');
      case 6:
        return ('суббота');
      default:
        return ('время');
    }
  }

  function getMonthName(monthNum) {
    switch (monthNum) {
      case 0:
        return ('января');
      case 1:
        return ('февраля');
      case 2:
        return ('марта');
      case 3:
        return ('апреля');
      case 4:
        return ('мая');
      case 5:
        return ('июня');
      case 6:
        return ('июля');
      case 7:
        return ('августа');
      case 8:
        return ('сентября');
      case 9:
        return ('октября');
      case 10:
        return ('ноября');
      case 11:
        return ('декабря');
      default:
        return (monthNum + 1);
    }
  }

  function getCurrentDateTime() {
    let currentDate = new Date(),
        currentSeconds = currentDate.getSeconds();

    return ('Сегодня ' +
    currentDate.getDate() +
    ' ' +
    getMonthName(currentDate.getMonth()) +
    ' ' +
    currentDate.getFullYear() +
    ' года, ' +
    getWeekdayName(currentDate.getDay()) +
    ', ' +
    currentDate.getHours() +
    declOfNum(currentDate.getHours(), [' час ', ' часа ', ' часов ']) +
    currentDate.getMinutes() +
    declOfNum(currentDate.getMinutes(), [' минута ', ' минуты ', ' минут ']) +
    currentDate.getSeconds() +
    declOfNum(currentSeconds, [' секунда', ' секунды', ' секунд']));
  }

  function showCurrentDateTimeInConsole() {
    console.log(getCurrentDateTime());
  }

  alert(getCurrentDateTime());

  setInterval(showCurrentDateTimeInConsole, 1000);
}

exe2.onclick = function() {
  while (true) {
    let userLogin = prompt('Введите ваш логин', '');

    if (userLogin === null) {
      break;

    } else if (userLogin === '') {
        alert('Ничего не ввели');

    } else if (users.find(user => user.login === userLogin)) {
        while (true) {
          let userPassword = prompt('Введите ваш пароль', '');

          if (userPassword === null) {
            return false;

          } else if (userPassword === '') {
              alert('Ничего не ввели');

          } else if (users.find(user => user.login === userLogin && user.password === userPassword)) {
            alert ('Привет ' + users.find(user => user.login).name + '!');
            return true;

          } else {
            alert ('Ошибка авторизации, введен не правильный пароль');
          }
        }
    } else {
        alert ('Ошибка авторизации, пользователь с таким логином не найден');
        break;
    }
  }
}
