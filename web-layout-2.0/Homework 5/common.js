$(document).ready(function(){

    let $exchangeRates = $('.exchange-rates'),
        $searchBarBtn = $('.search-bar-btn'),
        $searchForm = $('.searchForm'),
        $burgerButton = $('.burger-button'),
        $navHeadMenu = $('.nav-head-menu'),
        $headerElBar = $('.header-element-bar'),
        $topBarEl = $('.top-bar-element');

    function createExchangeRates(USD, EUR) {
        return [ '<p>Курс рубля:<span class="exchange-USD">',
        USD,
        '</span><span class="exchange-EUR">',
        EUR,
        '</span></p>'].join('')
    }

    $.get('http://data.fixer.io/api/latest', {'access_key': '8dd33bc902a57e716d1225befab7f9b2'}, function getExchangeRates(responce) {

      let rubInEuro = responce.rates.RUB,
          usdInEuro = responce.rates.USD,
          rubInUsd = rubInEuro / usdInEuro,
          USD = rubInUsd.toFixed(2),
          EUR = rubInEuro.toFixed(2);

      $exchangeRates.append(createExchangeRates(USD, EUR));
    });

    $searchBarBtn.on('click', function expandSearchForm() {
      $searchForm.toggleClass('searchForm-active');
      $searchBarBtn.toggleClass('search-btn-active')
      .attr('aria-label', $(this).attr('aria-label') == 'Закрыть поиск по сайту' ? "Начать поиск по сайту" : "Закрыть поиск по сайту");
    });

    $burgerButton.on('click', function expandSiteNavigation(e) {
      e.preventDefault();
      $(this).toggleClass('burger-button_active')
      .attr('aria-label', $(this).attr('aria-label') == 'Закрыть меню' ? "Навигация по сайту" : "Закрыть меню");
      $searchBarBtn.toggleClass('search-bar-btn-hide');
      $navHeadMenu.toggleClass('nav-head-menu-active');
      $('body').toggleClass('disable-scroll');
    });

    function fixHeaderElBar() {
      if ($(window).scrollTop() > 56){
        $headerElBar.css({
          'position': 'fixed',
          'top': '0px'
        });

        $topBarEl.css({'margin-bottom': '51px'});
        $navHeadMenu.css('top', '50px');
      }else{
        $headerElBar.css({
          'position': 'relative',
        });

        $topBarEl.css({'margin-bottom': '0'});
        $navHeadMenu.css('top', '107px');
      }
    }

    $(window).scroll(fixHeaderElBar);
    fixHeaderElBar();
});
