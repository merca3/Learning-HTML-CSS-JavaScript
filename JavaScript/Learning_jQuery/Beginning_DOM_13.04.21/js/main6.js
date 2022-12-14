$('#form-submit').submit(function(event) {
    event.preventDefault();
    const rowNum = $('#choose-row').val();
    const colNum = $('#choose-col').val();
    const rowIndex = parseInt(rowNum) - 1;
    const colIndex = parseInt(colNum) - 1;


    const rowElement = $('tbody').children()[rowIndex];
    const cellElement = $(rowElement).children()[colIndex];


    $(cellElement).text($('#new-cell-text').val());
    $('#new-cell-text').val('');
})