document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o componente Choices.js no dropdown
    const choices = new Choices('#opcoesDropdown', {
        removeItemButton: true,  
        searchEnabled: false,    
        shouldSort: false,       
        placeholder: true,
        placeholderValue: 'Selecione uma ou mais opções',
        noResultsText: 'Nenhuma opção encontrada',
        noChoicesText: 'Sem opções disponíveis',
        itemSelectText: 'Pressione para selecionar' // Texto traduzido para português
    });

    // Função para abrir o modal de adicionar opções
    document.getElementById('addOption').addEventListener('click', function () {
        const addOptionModal = new bootstrap.Modal(document.getElementById('addOptionModal'));
        addOptionModal.show();
    });

    // Função para adicionar nova opção ao dropdown
    document.getElementById('confirmAddOption').addEventListener('click', function () {
        const newOptionDescription = document.getElementById('newOptionDescription').value.trim();
        
        if (newOptionDescription !== '') {
            // Adicionar nova opção ao Choices.js
            choices.setChoices([{ value: newOptionDescription, label: newOptionDescription, selected: false }]);
            
            // Limpar campo de entrada do modal
            document.getElementById('newOptionDescription').value = '';

            // Fechar o modal após adicionar
            const addOptionModal = bootstrap.Modal.getInstance(document.getElementById('addOptionModal'));
            addOptionModal.hide();
        } else {
            alert('Por favor, insira a descrição da opção.');
        }
    });
});

// Variável para controlar a ação a ser confirmada
let actionToConfirm = '';

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

// Evento de confirmação do modal
document.getElementById('confirmYes').addEventListener('click', function () {
    if (actionToConfirm === 'salvar') {
        console.log('Cadastro salvo com sucesso!');
    } else if (actionToConfirm === 'sair') {
        window.location.href = 'pagina_de_saida.html';
    } else if (actionToConfirm === 'excluir') {
        console.log('Cadastro excluído com sucesso!');
    }
});
