let descriptionTaskEL = document.querySelector('.description'),
    listEmptyEL = document.querySelector('.listEmpty'),
    newNoteEL = document.querySelector('.form-note');

function addNewNote() {
    let text = descriptionTaskEL.value;

    if (text === "") {
        verifyRequiredFields(true);
    } else {
        verifyRequiredFields();
        getToDoItem();
        descriptionTaskEL.value = '';
        emptyMessageToggle();
    }
}

function emptyMessageToggle() {
    let tasks = document.querySelectorAll('.note-item');
    
    if (tasks.length !== 0) {
        listEmptyEL.style.display = 'none';
    } else {
        listEmptyEL.style.display = 'block';
    }
}

function verifyRequiredFields(verifyTrue) {
    if (verifyTrue) {
        descriptionTaskEL.classList.add('js-newNoteEmpty');
        descriptionTaskEL.setAttribute('required', true);
        descriptionTaskEL.setAttribute('placeholder', 'Заполните поле');

    } else {
        descriptionTaskEL.classList.remove('js-newNoteEmpty');
        descriptionTaskEL.setAttribute('required', false);
        descriptionTaskEL.removeAttribute('placeholder');
    }
}

function getToDoItem() {
    let text = descriptionTaskEL.value.replace(/(.{32})/g, "$1\n"),
        task = document.createElement('li');
    
    task.insertAdjacentHTML('beforeend', ('<p class="note-item-description">' +
                                            text +
                                            '</p><button class="close-btn" type="button" name="CloseButton" aria-label="Закрыть задачу"></button>'));
    task.classList.add('note-item');
    listItemEL.appendChild(task);
}