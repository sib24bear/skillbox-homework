let userName = prompt('Как вас зовут?'),
    userLastName = prompt('Ваша фамилия?'),
    userBirthYear = prompt('Ваш год рождения?'),
    currentYear = 2019;

let age = currentYear - userBirthYear;

if (age < 20) {
  alert('Привет, ' + userLastName + ' ' + userName + '!');
} else if (age >= 20 && age < 40) {
  alert('Добрый день, ' + userLastName + ' ' + userName + '!');
} else {
  alert('Здравствуйте, ' + userLastName + ' ' + userName + '!');
}
