'use strict';

tlFrom.addEventListener( 'click', function(e) {
    resetActiveClass(tlToMoreLanguageBtn, tlTolanguageList);

    if (e.target.classList.contains('more-language-btn')) {
        e.target.classList.toggle('active');
        e.target.parentElement.querySelector('.language-list').classList.toggle('active');

    } else if (e.target.classList.contains('language-item')) {
        e.target.parentElement.querySelector('.more-language-btn').classList.toggle('active');
        e.target.parentElement.querySelector('.language-list').classList.toggle('active');

    } else if (e.target.classList.contains('language-name')) {
        resetActiveClassLanguageName(tlFromLanguageName);

        e.target.classList.toggle('active');

        let lang = new SetSelectLanguage(tlFromLanguageName);

        tlFromLanguageItem.setAttribute('data-value', lang.getLanguageCode);
        tlFromLanguageItem.innerHTML = lang.getLanguageName;

        translateText();
    }
});

tlTo.addEventListener( 'click', function(e) {
    resetActiveClass(tlFromMoreLanguageBtn, tlFromlanguageList);

    if (e.target.classList.contains('more-language-btn')) {
        e.target.classList.toggle('active');
        e.target.parentElement.querySelector('.language-list').classList.toggle('active');

    } else if (e.target.classList.contains('language-item')) {
        e.target.parentElement.querySelector('.more-language-btn').classList.toggle('active');
        e.target.parentElement.querySelector('.language-list').classList.toggle('active');

    } else if (e.target.classList.contains('language-name')) {
        resetActiveClassLanguageName(tlToLanguageName);

        e.target.classList.toggle('active');

        let lang = new SetSelectLanguage(tlToLanguageName);

        tlToLanguageItem.setAttribute('data-value', lang.getLanguageCode);
        tlToLanguageItem.innerHTML = lang.getLanguageName;

        translateText();
    }
});

tlFields.addEventListener( 'click', function(e) {
    resetActiveClass(tlToMoreLanguageBtn, tlTolanguageList);
    resetActiveClass(tlFromMoreLanguageBtn, tlFromlanguageList);
});

req.addEventListener('load', function () {
    console.log(req.response);

    var response = JSON.parse(req.response);

    if (response.code !== 200) {
        tlOutput.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
        tlOutput.style.color = '#ff0000';

        return;
    }

    if (response.text.length === 0) {
        tlOutput.innerHTML = 'К сожалению, перевод для данного слова не найден';
        tlOutput.style.color = '#ff0000';

        return;
    }

    tlOutput.innerHTML = response.text.join('<br>');
    tlOutput.style.color = '#000000';
});

req.addEventListener('error', function() {
    tlOutput.innerHTML = 'Не удалось связаться с сервером. Проверьте подключение к интернету или URL запроса';
    tlOutput.style.color = '#ff0000';
});

tlInput.addEventListener('input', function(e) {
    translateText();
});
