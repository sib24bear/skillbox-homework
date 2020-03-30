let textField = document.querySelector('.text-field'),
    editBtn = document.querySelector('.edit-btn'),
    cancelBtn = document.querySelector('.cancel-btn'),
    saveBtn = document.querySelector('.save-btn');

function startEditing(startEditTrue) {
    if (startEditTrue) {
        textField.classList.add('edit');
        textField.setAttribute('contenteditable', true);

        editBtn.classList.add('btn-hide');
        editBtn.classList.remove('btn-active');
        editBtn.setAttribute('disabled', 'disabled');

        saveBtn.classList.add('btn-active');
        saveBtn.classList.remove('btn-hide');
        saveBtn.removeAttribute('disabled');

        cancelBtn.classList.add('btn-active');
        cancelBtn.classList.remove('btn-hide');
        cancelBtn.removeAttribute('disabled');

    } else {
        textField.classList.remove('edit');
        textField.removeAttribute('contenteditable');

        editBtn.classList.add('btn-active');
        editBtn.classList.remove('btn-hide');
        editBtn.removeAttribute('disabled');

        saveBtn.classList.add('btn-hide');
        saveBtn.classList.remove('btn-active');
        saveBtn.setAttribute('disabled', 'disabled');

        cancelBtn.classList.add('btn-hide');
        cancelBtn.classList.remove('btn-active');
        cancelBtn.setAttribute('disabled', 'disabled');
    }
}

function addTextToLocalStorage() {
    let textFieldMarkup = textField.innerHTML;

    localStorage.setItem('texts', textFieldMarkup);
}

function replaceTextFieldContent() {
    if (localStorage.getItem('texts') !== null) {
        while (textField.firstChild) {
            textField.removeChild(textField.firstChild);
        }
    
        textField.insertAdjacentHTML('beforeend', localStorage.getItem('texts'));
    } else {
        addTextToLocalStorage();
    }
}