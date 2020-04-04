'use strict';

let req = new XMLHttpRequest(),

    tlFrom = document.querySelector('.translate-from'),
    tlFromMoreLanguageBtn = tlFrom.querySelector('.more-language-btn'),
    tlFromlanguageList = tlFrom.querySelector('.language-list'),
    tlFromLanguageName = tlFrom.querySelectorAll('.language-name'),
    tlFromLanguageItem = tlFrom.querySelector('.language-item'),

    tlTo = document.querySelector('.translate-to'),
    tlToMoreLanguageBtn = tlTo.querySelector('.more-language-btn'),
    tlTolanguageList = tlTo.querySelector('.language-list'),
    tlToLanguageName = tlTo.querySelectorAll('.language-name'),
    tlToLanguageItem = tlTo.querySelector('.language-item'),

    tlFields = document.querySelector('.translate-fields'),
    tlInput = document.querySelector('.translate-input'),
    tlOutput = document.querySelector('.translate-output'),

    tx = document.getElementsByTagName('textarea');

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
}

function resetActiveClass(languageBtn, languageList) {
    if (languageBtn.classList.contains('active')) {
        languageBtn.classList.toggle('active');
        languageList.classList.toggle('active');
    }
}

function resetActiveClassLanguageName(languageName) {
    for(let i = 0; i < languageName.length; i++) {
        if(languageName[i].classList.contains('active')) {
            languageName[i].classList.toggle('active');
        }
    }
}

function SetSelectLanguage(languageName) {
    for(let i = 0; i < languageName.length; i++) {
        if(languageName[i].classList.contains('active')) {
            this.getLanguageCode = languageName[i].getAttribute('data-value');

            this.getLanguageName = languageName[i].innerHTML;
        }
    }
}

function GetSelectLanguage(languageName) {
    if (languageName.hasAttribute('data-value')) {
        this.getLanguageCode = languageName.getAttribute('data-value');
    } else {
        languageName.setAttribute('data-value', 'ru');

        this.getLanguageCode = languageName.getAttribute('data-value');
    }
}

function getTextTranslate() {
    let tlInput = document.querySelector('.translate-input');

    this.text = tlInput.value;
}

function generateNewRequestString() {
    let API_KEY = 'trnsl.1.1.20200327T162730Z.4319dce1cae02776.c3ccf73e54d33e064bb5be328f40da730af55dfa',
        url = 'https://translate.yandex.net/api/v1.5/tr.json/translate',
        tlText = new getTextTranslate(),
        tlLanguageFrom = new GetSelectLanguage(tlFromLanguageItem),
        tlLanguageTo = new GetSelectLanguage(tlToLanguageItem);

    url += '?key=' + API_KEY; // добавляем к запросу ключ API
    url += '&text=' + tlText.text; // текст для перевода
    url += '&lang=' + tlLanguageFrom.getLanguageCode + '-' + tlLanguageTo.getLanguageCode;

    return url;
}

function translateText() {
    if (tlInput.value !== '') {
        req.open('get', generateNewRequestString());
        req.send();
    } else {
        tlOutput.innerHTML = 'Перевод...';
    }
}
