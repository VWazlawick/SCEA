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
}
