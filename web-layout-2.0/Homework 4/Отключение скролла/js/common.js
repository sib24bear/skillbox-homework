$(document).ready(function() {
  function enablePopUp() {
    $('.pop-up-container').show();

    $('body').addClass('disable-scroll');
  }

  function disablePopUp() {
    $('.pop-up-container').hide();

    $('body').removeClass('disable-scroll');
  }

  $('button').mousedown(function enableClickAnimation() {
    $(this).css('background-image', 'linear-gradient(180deg, #ffffff, #ffffff00)');
  }).mouseup(function disableClickAnimation() {
    $(this).css('background-image', 'none');
  });

  $('.button').on('click', enablePopUp);

  $('.pop-up-button').on('click', disablePopUp);
});
