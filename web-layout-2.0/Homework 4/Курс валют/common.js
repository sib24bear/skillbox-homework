$(document).ready(function(){

    $.get('http://data.fixer.io/api/latest', {'access_key': '8dd33bc902a57e716d1225befab7f9b2'}, function(responce) {

      let rubInEuro = responce.rates.RUB,
          usdInEuro = responce.rates.USD,
          rubInUsd = rubInEuro / usdInEuro;
          
      $('.exchange-rates').append(`
        <p>Курс рубля:
          <span class="exchange-USD">${rubInUsd.toFixed(2)}</span>

          <span class="exchange-EUR">${rubInEuro.toFixed(2)}</span>
        </p>`);
    });
});
