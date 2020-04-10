'use strict';

$(document).ready(function() {
  
  $('.ball').on('click', function () {  
    $(this).toggleClass('kick');
    kickBall();
  });
  
});