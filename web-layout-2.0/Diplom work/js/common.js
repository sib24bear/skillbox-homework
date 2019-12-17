$(document).ready(function() {
  let $page = $('.page'),
      owl = $('.owl-carousel'),
      $modalInner = $('.modal__inner'),
      $modalCallback = $('.modal-callback'),
      $modalFeetback = $('.modal-feetback'),
      $modalContainer = $('.modal__container'),
      $headerNav = $('header__nav'),
      $closeBtn = $('.modal__close-btn');

  owl.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        320:{
            items: 1,
            dots: true,
            dotsEach: 1,
        },
        598:{
            items: 2,
            dots: true,
            dotsEach: 1,
        },
        1200:{
            items: 3,
            dots: false,
        }
      }
  });

  $('.control-arrow__btn_right').click(function() {
    owl.trigger('next.owl.carousel', [300]);
  })

  $('.control-arrow__btn_left').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  });

  $('.burger-button').on('click', function() {
    $(this).toggleClass('active')
    .attr('aria-label', $(this).attr('aria-label') == 'Скрыть меню' ? "Развернуть меню" : "Скрыть меню")
    .parents('.header__wrapper')
    .find('.header__nav')
    .toggleClass('open');
  });

  $page.on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $('.callback-button').on('click', function openModalFrame(e) {
    $page.addClass('disable-scroll');

    let $self = $(this);

    $self.attr("disabled","disabled");

    setTimeout(function() {
      $self.removeAttr("disabled");

      $modalCallback.addClass('visible');
      $modalContainer.addClass('open');
    }, 600);
  });

  $('.feedback-button').on('click', function openModalFrame(e) {
    $page.addClass('disable-scroll');

    let $self = $(this);

    $self.attr("disabled","disabled");

    setTimeout(function() {
      $self.removeAttr("disabled");

      $modalFeetback.addClass('visible');
      $modalContainer.addClass('open');
    }, 600);
  });

  $closeBtn.on('click', function closeModalFrame() {
    $modalContainer.removeClass('open');
    $modalInner.addClass('hidden');
    $page.removeClass('disable-scroll');

    setTimeout(function delayCloseModalFrame() {
      $modalInner.removeClass('visible').removeClass('hidden');
    }, 600);
  });

  $('.modal__inner').on('click', function closeModalFrame(e) {
    if (e.target === this) {
      setTimeout(function() {
      $modalContainer.removeClass('open');
      $modalInner.addClass('hidden');
      $page.removeClass('disable-scroll');

      setTimeout(function delayCloseModalFrame() {
        $modalInner.removeClass('visible').removeClass('hidden');
        }, 300);
      }, 300);
    };
  });

  $('.pop-up__btn').on('click', function(){
    $(this).parents('.pop-up').addClass('hidden');
    setTimeout(function() {
      $('.pop-up').removeClass('open').removeClass('hidden');
    }, 1000);
  });

  $('input[type = "tel"]').inputmask({ "mask": "+7 (999) 999-9999"});

  $('.form').each( function() {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      rules: {
        Телефон: {
          required: true,
        },
        Email: {
          required: true,
          email: true,
        },
        agree: {
          required: true,
        }
      },

      submitHandler(form) {
        let th = $(form);

        $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: th.serialize(),
        // eslint-disable-next-line func-names
      }).done(() => {
        console.log('send ok');

        $modalContainer.removeClass('open');
        $modalInner.addClass('hidden');
        $page.removeClass('disable-scroll');

        setTimeout(function delayCloseModalFrame() {
          $modalInner.removeClass('visible').removeClass('hidden');
          th.trigger('reset');
          $('.pop-up').addClass('open');
          setTimeout(function() {
            $('.pop-up').addClass('hidden');
            setTimeout(function() {
              $('.pop-up').removeClass('open').removeClass('hidden');
            }, 1000);
          }, 5000);
        }, 3000);
      });

        return false;
      }
    });
  });
});
