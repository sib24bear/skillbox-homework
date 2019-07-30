$(document).ready(function(){

  function initialState() {
    if (localStorage.getItem('notes') == null) {
      $('#list-empty').show();
    } else {
      $('.list-item').html(localStorage.getItem('notes'));
      $('#list-empty').hide();
    }
  }

  initialState();

  function addToStorage() {
		let notesList = $('.list-item').html();
		localStorage.setItem('notes', notesList);
	}

  $('#newNote').submit(function (e) {
    e.preventDefault();
  });

	function addNewNote() {
    let name = $('#titleNote').val(),
				text = $('#description').val().replace(/(.{32})/g, "$1\n");

    if (name.length !== 0 && text.length !== 0) {
      $('#titleNote').removeClass('new-note-empty');

      $('#description').removeClass('new-note-empty');

      $('.list-item').append(`
        <li class="note-item">
          <article>
            <header class="note-item-title">
              <h2 class="title-item">${name}</h2>

              <button class="close-btn" type="button" name="CloseButton"></button>

              <button class="expand-btn" type="button" name="expandButton"></button>
            </header>

            <footer class="note-item-description">
              <p class="description-item">${text}</p>
            </footer>
          </article>
        </li>
      `);

      $('#titleNote').val(''),

      $('#description').val(''),

      $('#list-empty').hide();

      addToStorage();

    } else {
        $('#titleNote').addClass('new-note-empty');

        $('#description').addClass('new-note-empty');
    }
  }

  $('.fixed-container').on('click', '.submit-btn', addNewNote);

  $('.list-item').on('click', '.close-btn', function() {
      let noteItem = $(this).parents('.note-item');

      noteItem.remove();

      let noteList = $('.note-item');

      addToStorage();

      if (noteList.length == 0) {
  			$('#list-empty').show();

        localStorage.removeItem('notes');
  		}
    });

  $('.list-item').on('click', '.expand-btn', function () {
     $(this).toggleClass('rotate').parents('.note-item').find('footer').slideToggle(200);
   });
});
