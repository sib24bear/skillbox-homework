'use strict';
function MakeCurrentDateTime() {
  let currentDate = new Date();
  
  this.getCurrentDateTime = function() {
    return currentDate.getHours() + ':'
    + currentDate.getMinutes() + ':'
    + currentDate.getSeconds() + ' '
    + currentDate.getDate() + '.'
    + (currentDate.getMonth() + 1) + '.'
    + currentDate.getFullYear();
  };
}

function User(firstName, lastName) {
  let regDateTime = new MakeCurrentDateTime();

  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDateTime.getCurrentDateTime();
}

function UserList(user) {
  this.users = [];

  this.add = function(user) {
    return this.users.push(user);
  };

  this.getAllUsers = function() {
    this.users.forEach(element => console.log(element.firstName + ' ' + element.lastName + ' - ' + element.regDate));
  }

}

function addNewUser() {
  let userList = new UserList();

  while (true) {
    let userData = prompt('Введите Имя и Фамилию через пробел', 'Имя Фамилия');

    if (userData === null) {
      userList.getAllUsers();
      break;

    } else if (userData.indexOf(" ") < 0 
    || userData.split(' ')[0] === '' 
    || userData.split(' ')[1] === '' 
    || userData.split(' ').length > 2) {
      if (userData === '') {
        alert('Ничего не ввели');
      } else {
        alert('Не правильно введены Имя и Фамилия');
      }

    } else {
      let newUser = new User(userData.split(' ')[0], userData.split(' ')[1]);
      userList.add(newUser);
    }
  }
}