document.addEventListener('DOMContentLoaded', () => {
    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        // Validação da Descrição da Pergunta
        const descricaoPergunta = document.getElementById('descricao-pergunta');
        const descricaoPerguntaError = document.getElementById('descricao-pergunta-error');
        if (descricaoPergunta.value.trim() === '') {
            descricaoPergunta.classList.add('is-invalid');
            descricaoPerguntaError.style.display = 'block';
            isValid = false;
        } else {
            descricaoPergunta.classList.remove('is-invalid');
            descricaoPergunta.classList.add('is-valid');
            descricaoPerguntaError.style.display = 'none';
        }

        // Validação do Tipo da Pergunta
        const tipoPergunta = document.getElementById('tipo-pergunta');
        const tipoPerguntaError = document.getElementById('tipo-pergunta-error');
        if (tipoPergunta.value === 'Selecione') {
            tipoPergunta.classList.add('is-invalid');
            tipoPerguntaError.style.display = 'block';
            isValid = false;
        } else {
            tipoPergunta.classList.remove('is-invalid');
            tipoPergunta.classList.add('is-valid');
            tipoPerguntaError.style.display = 'none';
        }

        // Validação do Sub Grupo
        const subGrupos = document.getElementById('sub-grupos');
        const subGruposError = document.getElementById('sub-grupos-error');
        if (subGrupos.value === 'Selecione') {
            subGrupos.classList.add('is-invalid');
            subGruposError.style.display = 'block';
            isValid = false;
        } else {
            subGrupos.classList.remove('is-invalid');
            subGrupos.classList.add('is-valid');
            subGruposError.style.display = 'none';
        }

        return isValid;
    }

    // Mostrar/ocultar limites de resposta com base no tipo de pergunta
    document.getElementById('tipo-pergunta').addEventListener('change', function() {
        if (this.value === 'Escala') {
            document.getElementById('limiteRespostasSection').style.display = 'block';
        } else {
            document.getElementById('limiteRespostasSection').style.display = 'none';
        }
    });

    // Evento de clique no botão "Adicionar Tipo de Pergunta"
    document.getElementById('adicionarTipoPergunta').addEventListener('click', () => {
        var modal = new bootstrap.Modal(document.getElementById('tipoPerguntaModal'));
        modal.show();
    });

    // Salvar novo tipo de pergunta do modal
    document.getElementById('saveTipoPergunta').addEventListener('click', () => {
        const tipoPerguntaPredefinido = document.getElementById('tipo-pergunta-predefinido').value;
        if (tipoPerguntaPredefinido) {
            const tipoPerguntaSelect = document.getElementById('tipo-pergunta');
            const option = document.createElement('option');
            option.value = tipoPerguntaPredefinido;
            option.text = tipoPerguntaPredefinido;
            tipoPerguntaSelect.add(option);
            tipoPerguntaSelect.value = tipoPerguntaPredefinido; // Selecionar automaticamente
            // Fechar o modal
            var modal = bootstrap.Modal.getInstance(document.getElementById('tipoPerguntaModal'));
            modal.hide();
        } else {
            alert('Por favor, selecione um tipo de pergunta.');
        }
    });

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
        document.getElementById('perguntasForm').reset();
        document.querySelectorAll('.is-invalid, .is-valid').forEach(element => {
            element.classList.remove('is-invalid', 'is-valid');
        });
        document.querySelectorAll('.error-message').forEach(element => {
            element.style.display = 'none';
        });
    });

    // Evento de input para permitir apenas números
    document.getElementById('limite-maximo').addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    document.getElementById('limite-minimo').addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Tooltip Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
