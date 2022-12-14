$('#insert-row').click(function() {
    // const newRow = $('<tr>');
    // const newRowCell1 = $('<td>');
    // const newRowCell2 = $('<td>');
    // newRow.append(newRowCell1).append(newRowCell2);
    // newRowCell1.text('NewRow Cell1');
    // newRowCell2.text('NewRow Cell2');
    // $('#sample-table').append(newRow);

    const tableElement = $('#sample-table');
    const rowCount = tableElement.find('tr').length;
    const newRow = `
    <tr>
            <td>Row${rowCount + 1} Cell1</td>
            <td>Row${rowCount + 1} Cell2</td>
        </tr>
    `;
    $('#sample-table').append(newRow);
})