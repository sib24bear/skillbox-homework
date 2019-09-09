$(document).ready(function() {
  let titleNoteEL = $('#titleNote'),
      descriptionEL = $('#description'),
      listItemEL = $('#listItem'),
      listEmptyEL = $('#listEmpty'),
      newNoteEL = $('#newNote');

  function emptyMessageToggle(showListEmpty) {
    if (showListEmpty) {
      listEmptyEL.show(true);
    } else {
      listEmptyEL.hide(false);
    }
  }

  if (localStorage.getItem('notes') == null) {
    emptyMessageToggle(true);
  } else {
    listItemEL.html(localStorage.getItem('notes'));;
    emptyMessageToggle();
  }

  function addNoteToLocalStorage(noteItemMarkup = listItemEL.html()) {
    localStorage.setItem('notes', noteItemMarkup);
	}

  function verifyRequiredFields(verifyTrue) {
    if (verifyTrue) {
      titleNoteEL.addClass('js-newNoteEmpty').prop('required', true);

      descriptionEL.addClass('js-newNoteEmpty').prop('required', true);
    } else {
      titleNoteEL.removeClass('js-newNoteEmpty').prop('required', false);

      descriptionEL.removeClass('js-newNoteEmpty').prop('required', false);
    }
  }

  function getToDoItem(
    title = titleNoteEL.val(),
    text = descriptionEL.val().replace(/(.{32})/g, "$1\n")) {
      return [ '<li class="note-item"><article><header class="note-item-title"><h3 class="title-item">',
                title,
                '</h3><button class="close-btn" type="button" name="CloseButton" aria-label="Закрыть заметку"></button><button class="expand-btn" type="button" name="expandButton" aria-label="Скрыть описание"></button></header><footer class="note-item-description"><p class="description-item">',
                text,
                '</p></footer></article></li>'].join('')
  }

	function addNewNote() {
    let title = titleNoteEL.val(),
        text = descriptionEL.val();

    if (title.length !== 0 && text.length !== 0) {
      verifyRequiredFields();

      listItemEL.append(getToDoItem(title, text));

      newNoteEL[0].reset();

      emptyMessageToggle();

      addNoteToLocalStorage();

    } else {
      verifyRequiredFields(true);
    }
  }

  newNoteEL.submit(function disableFormSending(e) {
    e.preventDefault();
    addNewNote();
    });

  listItemEL.on('click', '.close-btn', function closeNote() {

      $(this).parents('.note-item')
      .remove();

      addNoteToLocalStorage();

      if ($('.note-item').length == 0) {
  			emptyMessageToggle(true);
        localStorage.removeItem('notes');
  		}
    });

  listItemEL.on('click', '.expand-btn', function expandNoteFooter() {
     $(this).toggleClass('js-rotate')
     .attr('aria-label', $(this).attr('aria-label') == 'Скрыть описание' ? "Развернуть описание" : "Скрыть описание")
     .parents('.note-item')
     .find('.note-item-description')
     .toggleClass('js-expandFooter');
     });
});
