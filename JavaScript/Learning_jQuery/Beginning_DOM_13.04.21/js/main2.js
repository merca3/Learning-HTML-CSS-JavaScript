$('#form1').submit(function (event) {
    event.preventDefault();
    console.log($('#first-name').val())
    console.log($('#last-name').val())
})