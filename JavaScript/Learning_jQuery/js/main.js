// let ulElement = $('#todo-list');
// let liElements = $('#todo-list li');
// liElements.text('foo'); changes all texts

$('#todo-list').on('click', 'li span', function() {
    // console.log($(this)); // for jQuery like this
    let $liElement = $(this).parent();
    $liElement.toggleClass('completed'); // if has a class - deletes it
});

$('#todo-list').on('click', 'li button', function() {
    // $(this).parent().remove();
    $(this).parent().css('display', 'none');
});

$('.new-todo-form').submit(function(event) {
    event.preventDefault();
    const newTodoName = $('#new-todo-name').val();
    if (newTodoName === '') {
        alert('Please enter the ToDo');
        return;
    }
    // const newListElement = `
    //     <li>
    //         <span>${newTodoName}</span>
    //         <button>x</button>
    //     </li>
    // `; // a bit worse performance
    const newListElement = $('<li>');
    const theTitle = $('<span>');
    const theButton = $('<button>');
    newListElement.append(theTitle);
    // prepend - adds before, not after
    newListElement.append(theButton);
    theTitle.text(newTodoName);
    theButton.text('x');

    $('#todo-list').append(newListElement);
    $('#new-todo-name').val('');
    // if parameter - sets the value
});

$('#new-todo-name').keypress(function() { // keyboard event
    const newText = $(this).val();
    $('#text-holder').text(newText);
});