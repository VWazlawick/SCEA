function filterTable(columnIndex) {
    // Obtém a tabela e as linhas
    const table = document.querySelector('.custom-table tbody');
    const rows = table.querySelectorAll('tr');
    // Obtém o valor da entrada de filtro correspondente
    const filterValue = document.querySelectorAll('.filter-input')[columnIndex].value.toLowerCase();

    // Itera pelas linhas da tabela e oculta as que não correspondem ao filtro
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

    document.addEventListener('DOMContentLoaded', function (){
        var cpfElement = document.getElementById('cpf');
        var telefoneElement = document.getElementById('cpf');

        var cpf = cpfElement.textContent.trim();
        var telefone = telefoneElement.textContent.trim();

        function formatarCpf(cpf){
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }

        function formatarTelefone(telefone){
            return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }

        cpfElement.textContent = formatarCpf(cpf);
        telefoneElement.textContent = formatarTelefone(telefone);
    })
}
