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

