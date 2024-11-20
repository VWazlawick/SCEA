function filterTable(columnIndex) {
    const table = document.querySelector('.custom-table tbody');
    const rows = table.querySelectorAll('tr');
    const filterValue = document.querySelectorAll('.filter-input')[columnIndex].value.toLowerCase();

    rows.forEach(row => {
        const cell = row.cells[columnIndex];
        if (cell) {
            const cellText = cell.textContent.toLowerCase();
            if (cellText.indexOf(filterValue) > -1) {
                row.style.display = ''; // Mostra a linha
            } else {
                row.style.display = 'none'; // Oculta a linha
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', function (){
    var cnpjElement = document.querySelectorAll('.cnpj');
    function formatarCnpj(cnpj){
        return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }
    cnpjElement.forEach(function (element){
        var cnpj = element.textContent.trim();
        element.textContent = formatarCnpj(cnpj);
    })
});

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
            window.location.href = '/empresa/editar/' + id;
        }else{
            alert('ID Empresa não encontrado')
        }
    }
    else{
        alert('Por favor, selecione um item');
    }
});

// JS da Pagina de Carregamento

document.addEventListener("DOMContentLoaded", function() {
    // Simula um tempo de carregamento (opcional)
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500); // Ajuste o tempo conforme necessário
});
