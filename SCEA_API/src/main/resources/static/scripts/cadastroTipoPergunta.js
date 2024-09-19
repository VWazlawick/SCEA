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
