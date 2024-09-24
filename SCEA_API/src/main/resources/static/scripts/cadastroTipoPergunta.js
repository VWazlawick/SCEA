// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.getElementById('tipo-pergunta').addEventListener('change', function () {
    const tipoSelecionado = this.value;
    const opcoesSection = document.querySelector('.opcoes-section');

    // Regras para ocultar ou exibir a seção de opções
    if (['Escala', 'Texto', 'Data', 'Número', 'Arquivo', 'Hora', 'E-mail', 'URL'].includes(tipoSelecionado)) {
        opcoesSection.style.display = 'none';
    } else {
        opcoesSection.style.display = 'block';
    }
});


// Adicionar opções à lista
document.getElementById('addOption').addEventListener('click', function () {
    const optionsInput = document.getElementById('opcoes');
    const optionsList = document.getElementById('optionsList');

    if (optionsInput.value.trim() !== '') {
        // Criar um novo item de lista
        const li = document.createElement('li');
        li.textContent = optionsInput.value;

        // Adicionar botão de remoção
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', function () {
            optionsList.removeChild(li);
        });

        li.appendChild(removeButton);
        optionsList.appendChild(li);

        // Limpar o campo de entrada
        optionsInput.value = '';
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
