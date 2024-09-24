// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Botão Salvar
    const saveButton = document.getElementById('saveButton');

    // Adicionando evento de clique ao botão Salvar
    saveButton.addEventListener('click', function () {
        if (validateForm()) {
            // Exibir modal de confirmação
            showModal();
        }
    });

    // Função para exibir o modal de confirmação
    function showModal() {
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        modal.show();

        // Ação de confirmação do modal
        document.getElementById('confirmYes').onclick = function () {
            modal.hide();
            // Aqui você pode adicionar a lógica para salvar os dados ou enviar o formulário
            alert('Tipo de Serviço cadastrado com sucesso!');
        };
    }

    // Validação do formulário de cadastro de Tipo de Serviço
    function validateForm() {
        let isValid = true;

        // Validação do Nome do Tipo de Serviço
        const nomeTipoServico = document.getElementById('nome-tipo-servico');
        if (nomeTipoServico.value.trim() === '') {
            nomeTipoServico.classList.add('is-invalid');
            document.getElementById('nome-tipo-servico-error').style.display = 'block';
            isValid = false;
        } else {
            nomeTipoServico.classList.remove('is-invalid');
            nomeTipoServico.classList.add('is-valid');
            document.getElementById('nome-tipo-servico-error').style.display = 'none';
        }

        return isValid;
    }
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

