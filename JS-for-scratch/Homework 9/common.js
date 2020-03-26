let listItemEL = document.querySelector('.listItem'),
    newTaskBtn = document.querySelector('.submit-btn');

newTaskBtn.addEventListener( 'click', function(e) {
    e.preventDefault();
    addNewNote();
});

listItemEL.addEventListener( 'click', function(e) {
    if (e.target.classList.contains('close-btn')) {
        e.target.closest('.close-btn').parentElement.remove();
        emptyMessageToggle();
        
    } else if (e.target.classList.contains('note-item-description')) {
        e.target.classList.toggle('js-noteItemDescription');
    }  
});