function filterTable(columnIndex) {
    const table = document.querySelector('.custom-table tbody');
    const rows = table.querySelectorAll('tr');
    const filterValue = document.querySelectorAll('.filter-input')[columnIndex].value.toLowerCase();

    rows.forEach(row => {
        const cell = row.cells[columnIndex];
        if (cell) {
            const cellText = cell.textContent.toLowerCase();
            if (cellText.indexOf(filterValue) > -1) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}
function toggleRowSelection(event){
    const rows = document.querySelectorAll('.table-row');
    rows.forEach(row => row.classList.remove('selected'));
    const target = event.currentTarget;
    if(target.classList.contains('table-row')){
        target.classList.add('selected');
    }
}
document.querySelectorAll('.table-row').forEach(row => {
    row.addEventListener('click', toggleRowSelection);
})
const editButton = document.querySelector('#editButton');
editButton.addEventListener('click', function (){
    const selectedRow = document.querySelector('.table-row.selected');
    if(selectedRow){
        const idCell = selectedRow.querySelector('.id');
        const id = idCell ? idCell.textContent.trim() : null;
        if(id){
            window.location.href = '/subgrupo/editar/' + id;
        }else{
            alert('ID sub grupo não encontrado')
        }
    }
    else{
        alert('Por favor, selecione um item');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});