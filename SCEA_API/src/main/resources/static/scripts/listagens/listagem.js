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
document.addEventListener('DOMContentLoaded', function (){
    var cpfElement = document.querySelectorAll('.cpf');
    var telefoneElement = document.querySelectorAll('.telefone');
    function formatarCpf(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    function formatarTelefone(telefone){
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    cpfElement.forEach(function (element){
        var cpf = element.textContent.trim();
        element.textContent = formatarCpf(cpf);
    })
    telefoneElement.forEach(function (element){
        var telefone = element.textContent.trim();
        element.textContent = formatarTelefone(telefone);
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
            window.location.href = '/aluno/editar/' + id;
        }else{
            alert('ID aluno não encontrado')
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







