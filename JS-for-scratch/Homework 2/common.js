let exe1 = document.getElementById('exercise-1'),
    exe2 = document.getElementById('exercise-2'),
    exe3 = document.getElementById('exercise-3');

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

exe1.onclick = function() {
let firstNumber,
    secondNumber;

  while (!isNumeric(firstNumber = prompt('Введите первое число', ''))) {
    if (firstNumber === null) {
      return false;
    } else if (firstNumber === '') {
      alert('Ничего не ввели');
    } else {
      alert('Это не число');
    }
  }

  while (!isNumeric(secondNumber = prompt('Введите второе число', ''))) {
    if (secondNumber === null) {
      return false;
    } else if (secondNumber === '') {
      alert('Ничего не ввели');
    } else {
      alert('Это не число');
    }
  }

  if (firstNumber > secondNumber) {
    alert('Первое число ' + firstNumber + ' больше, чем второе число ' + secondNumber);
  } else if (firstNumber < secondNumber) {
    alert('Второе число ' + secondNumber + ' больше, чем первое число ' + firstNumber);
  } else {
    alert('Числа равны');
  }
}

exe2.onclick = function() {
  let startingYear,
      endYear;

  function findLeapYear(n, m) {
    for (let i = n; i <= m; i++) {
      if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
        console.log(i)
      }
    }
  }

  function checkNumber() {
    let number = prompt('Введите год в пределах 1900-2020 годов', '');

    if (!isNumeric(number)) {
      if (number === null) {
        return false;
      } else if (number === '') {
        alert('Ничего не ввели');
        return checkNumber();
      } else {
        alert('Это не число');
        return checkNumber();
      }
    } else {
      if (number > 2020) {
        alert('Этот год больше 2020');
        return checkNumber();
      } else if (number < 1900) {
        alert('Этот год меньше 1900');
        return checkNumber();
      } else {
        return number;
      }
    }
  }

  startingYear = checkNumber();
  if (startingYear === false) {
    return false;
  }

  endYear = checkNumber();
  if (endYear === false) {
    return false;
  }

  if (startingYear < endYear) {
    findLeapYear(startingYear, endYear);
  } else if (startingYear > endYear) {
    findLeapYear(endYear, startingYear);
  } else {
    if (((startingYear % 4 == 0) && (startingYear % 100 != 0)) || (startingYear % 400 == 0)) {
      console.log(startingYear)
    } else {
      console.log('Начальный и конечный год равны, ' + startingYear + ' не високосный год.')
    }
  }
}

exe3.onclick = function() {
  let sum = 0;

  while (true) {
    let number = prompt('Введите число', '');

    if (!isNumeric(number)) {
      if (number === null) {
        break;
      } else if (number === '') {
        alert('Ничего не ввели');
      } else {
        alert('Это не число');
      }
    } else {
      sum += +number;
    }
  }

  alert('Сумма введеных чисел - ' + sum);
}
