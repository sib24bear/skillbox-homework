cancelBtn.addEventListener( 'click', function() {
    replaceTextFieldContent();
    startEditing();
});

editBtn.addEventListener( 'click', function(e) {
    startEditing(true);
});

saveBtn.addEventListener( 'click', function(e) {
    addTextToLocalStorage();
    startEditing();
});

replaceTextFieldContent();