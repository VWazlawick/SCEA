document.addEventListener('DOMContentLoaded', () => {
    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        // Validação do Nome do Sub Grupo
        const nomeSubGrupo = document.getElementById('nome-subgrupo');
        const nomeSubGrupoError = document.getElementById('nome-subgrupo-error');
        if (nomeSubGrupo.value.trim() === '') {
            nomeSubGrupo.classList.add('is-invalid');
            nomeSubGrupoError.style.display = 'block';
            isValid = false;
        } else {
            nomeSubGrupo.classList.remove('is-invalid');
            nomeSubGrupo.classList.add('is-valid');
            nomeSubGrupoError.style.display = 'none';
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
        document.getElementById('subGrupoForm').reset();
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
