document.addEventListener('DOMContentLoaded', () => {
    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        // Validação da Descrição da Ficha
        const descricaoFicha = document.getElementById('descricao-ficha');
        const descricaoFichaError = document.getElementById('descricao-ficha-error');
        if (descricaoFicha.value.trim() === '') {
            descricaoFicha.classList.add('is-invalid');
            descricaoFichaError.style.display = 'block';
            isValid = false;
        } else {
            descricaoFicha.classList.remove('is-invalid');
            descricaoFicha.classList.add('is-valid');
            descricaoFichaError.style.display = 'none';
        }

        // Validação do Grupo
        const selecionarGrupos = document.getElementById('selecionar-grupos');
        const selecionarGruposError = document.getElementById('selecionar-grupos-error');
        if (selecionarGrupos.value === 'Selecione') {
            selecionarGrupos.classList.add('is-invalid');
            selecionarGruposError.style.display = 'block';
            isValid = false;
        } else {
            selecionarGrupos.classList.remove('is-invalid');
            selecionarGrupos.classList.add('is-valid');
            selecionarGruposError.style.display = 'none';
        }

        // Validação do Sub Grupo
        const selecionarSubGrupos = document.getElementById('selecionar-subgrupos');
        const selecionarSubGruposError = document.getElementById('selecionar-subgrupos-error');
        if (selecionarSubGrupos.value === 'Selecione') {
            selecionarSubGrupos.classList.add('is-invalid');
            selecionarSubGruposError.style.display = 'block';
            isValid = false;
        } else {
            selecionarSubGrupos.classList.remove('is-invalid');
            selecionarSubGrupos.classList.add('is-valid');
            selecionarSubGruposError.style.display = 'none';
        }

        return isValid;
    }

    // Evento de clique no botão Salvar
    document.getElementById('saveButton').addEventListener('click', () => {
        if (validateForm()) {
            alert('Formulário válido. Pronto para salvar.');
            // Adicione aqui a lógica para salvar os dados
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    // Evento de clique no botão Limpar
    document.getElementById('clearButton').addEventListener('click', () => {
        document.getElementById('fichaAvaliativaForm').reset();
        document.querySelectorAll('.is-invalid, .is-valid').forEach(element => {
            element.classList.remove('is-invalid', 'is-valid');
        });
        document.querySelectorAll('.error-message').forEach(element => {
            element.style.display = 'none';
        });
    });

    // Tooltip Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
