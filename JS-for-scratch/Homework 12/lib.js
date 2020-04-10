'use strict';
let $ball = $('.ball');

function RandomNum() {
  let rundomNum;

  this.randomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return rundomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.read = function() {
    return rundomNum;
  };
}

function kickBall() {
  let makeRandomNum = new RandomNum(),
      randomTop = makeRandomNum.randomNumber(0, 100);

  if ($ball.hasClass('kick')) {
    $ball.animate({
      left: "3%",
      top: randomTop + '%'
    }, 1000, 'linear', function() {
      checkGoal(randomTop);
    });

  } else {
    $ball.animate({
      left: "97%",
      top: randomTop + '%'
    }, 1000, 'linear', function() {
      checkGoal(randomTop);
    });
  }
}

function checkGoal(goal) {
  const topValueСrossbar = 47,
        bottomValueСrossbar = 53;

  if (goal >= topValueСrossbar && goal <= bottomValueСrossbar) {
    alert('Гооол!');

    $ball.delay().animate({
      left: "50%",
      top: "50%"
    }, 1000);
  }
}