document.addEventListener('DOMContentLoaded', () => {
    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        // Validação do ID
        const id = document.getElementById('id');
        const idError = document.getElementById('id-error');
        if (id.value.trim() === '') {
            id.classList.add('is-invalid');
            idError.style.display = 'block';
            isValid = false;
        } else {
            id.classList.remove('is-invalid');
            id.classList.add('is-valid');
            idError.style.display = 'none';
        }

        // Validação da Descrição do Grupo
        const descricaoGrupo = document.getElementById('descricao-grupo');
        const descricaoGrupoError = document.getElementById('descricao-grupo-error');
        if (descricaoGrupo.value.trim() === '') {
            descricaoGrupo.classList.add('is-invalid');
            descricaoGrupoError.style.display = 'block';
            isValid = false;
        } else {
            descricaoGrupo.classList.remove('is-invalid');
            descricaoGrupo.classList.add('is-valid');
            descricaoGrupoError.style.display = 'none';
        }

        // Validação do Sub Grupo
        const subgrupo = document.getElementById('subgrupo');
        const subgrupoError = document.getElementById('subgrupo-error');
        if (subgrupo.value === 'Selecione') {
            subgrupo.classList.add('is-invalid');
            subgrupoError.style.display = 'block';
            isValid = false;
        } else {
            subgrupo.classList.remove('is-invalid');
            subgrupo.classList.add('is-valid');
            subgrupoError.style.display = 'none';
        }

        // Validação da Idade Inicial
        const idadeInicial = document.getElementById('idade-inicial');
        const idadeInicialError = document.getElementById('idade-inicial-error');
        if (idadeInicial.value.trim() === '') {
            idadeInicial.classList.add('is-invalid');
            idadeInicialError.style.display = 'block';
            isValid = false;
        } else {
            idadeInicial.classList.remove('is-invalid');
            idadeInicial.classList.add('is-valid');
            idadeInicialError.style.display = 'none';
        }

        // Validação da Idade Final
        const idadeFinal = document.getElementById('idade-final');
        const idadeFinalError = document.getElementById('idade-final-error');
        if (idadeFinal.value.trim() === '') {
            idadeFinal.classList.add('is-invalid');
            idadeFinalError.style.display = 'block';
            isValid = false;
        } else {
            idadeFinal.classList.remove('is-invalid');
            idadeFinal.classList.add('is-valid');
            idadeFinalError.style.display = 'none';
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
        document.getElementById('grupoAvaliativoForm').reset();
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
