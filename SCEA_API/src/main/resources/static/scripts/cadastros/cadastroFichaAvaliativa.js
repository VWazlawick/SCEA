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

// JS da Pagina de Carregamento

document.addEventListener("DOMContentLoaded", function() {
    // Simula um tempo de carregamento (opcional)
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500); // Ajuste o tempo conforme necessário
});
