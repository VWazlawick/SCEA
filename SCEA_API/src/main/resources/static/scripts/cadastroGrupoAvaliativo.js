// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

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

let actionToConfirm = ''; // Variável para controlar a ação que será confirmada

// Função para abrir o modal de confirmação
function openConfirmationModal(action) {
    actionToConfirm = action;
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
    confirmModal.show();
}

// Eventos dos botões
document.getElementById('saveButton').addEventListener('click', function () {
    openConfirmationModal('salvar');
});

document.getElementById('sairButton').addEventListener('click', function () {
    openConfirmationModal('sair');
});

document.getElementById('excluirButton').addEventListener('click', function () {
    openConfirmationModal('excluir');
});

document.getElementById('clearButton').addEventListener('click', function () {
    // Lógica para limpar o formulário
    document.getElementById('cadastroForm').reset(); // Limpa todos os campos do formulário
});

// Evento de confirmação do modal
document.getElementById('confirmYes').addEventListener('click', function () {
    if (actionToConfirm === 'salvar') {
        // Lógica para salvar o cadastro
        console.log('Cadastro salvo com sucesso!');
        // Aqui você pode chamar a função de salvar do formulário
    } else if (actionToConfirm === 'sair') {
        // Lógica para sair da página ou do formulário
        window.location.href = 'pagina_de_saida.html'; // Redireciona para uma página de saída, por exemplo
    } else if (actionToConfirm === 'excluir') {
        // Lógica para excluir o cadastro
        console.log('Cadastro excluído com sucesso!');
        // Aqui você pode chamar a função de exclusão
    }
});

