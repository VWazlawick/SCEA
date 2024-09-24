// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroProfissionalForm');
    const saveButton = document.getElementById('saveButton');

    // Máscara para CPF, RG e Telefone
    const cpfInput = document.getElementById('cpf');
    const rgInput = document.getElementById('rg');
    const telefoneInput = document.getElementById('telefone');

    const cpfMask = IMask(cpfInput, {
        mask: '000.000.000-00'
    });

    const rgMask = IMask(rgInput, {
        mask: '00.000.000-0'
    });

    const telefoneMask = IMask(telefoneInput, {
        mask: '(00) 00000-0000'
    });

    function validateForm() {
        let isValid = true;


        // Validação do Nome Completo
        const nome = document.getElementById('nome');
        const nomeError = document.getElementById('nome-error');
        if (nome.value.trim() === '') {
            nome.classList.add('is-invalid');
            nomeError.style.display = 'block';
            isValid = false;
        } else {
            nome.classList.remove('is-invalid');
            nome.classList.add('is-valid');
            nomeError.style.display = 'none';
        }

        // Validação de CPF
        const cpf = document.getElementById('cpf');
        const cpfError = document.getElementById('cpf-error');
        const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfPattern.test(cpf.value)) {
            cpf.classList.add('is-invalid');
            cpfError.style.display = 'block';
            isValid = false;
        } else {
            cpf.classList.remove('is-invalid');
            cpf.classList.add('is-valid');
            cpfError.style.display = 'none';
        }

        // Validação de RG
        const rg = document.getElementById('rg');
        const rgError = document.getElementById('rg-error');
        if (rg.value.trim() === '') {
            rg.classList.add('is-invalid');
            rgError.style.display = 'block';
            isValid = false;
        } else {
            rg.classList.remove('is-invalid');
            rg.classList.add('is-valid');
            rgError.style.display = 'none';
        }

        // Validação de Telefone
        const telefone = document.getElementById('telefone');
        const telefoneError = document.getElementById('telefone-error');
        if (telefone.value.trim() === '') {
            telefone.classList.add('is-invalid');
            telefoneError.style.display = 'block';
            isValid = false;
        } else {
            telefone.classList.remove('is-invalid');
            telefone.classList.add('is-valid');
            telefoneError.style.display = 'none';
        }

        // Validação do Status Ativo
        const statusAtivo = document.getElementById('st_ativo');
        const statusError = document.getElementById('status-error');
        if (statusAtivo.value === 'Selecione') {
            statusAtivo.classList.add('is-invalid');
            statusError.style.display = 'block';
            isValid = false;
        } else {
            statusAtivo.classList.remove('is-invalid');
            statusAtivo.classList.add('is-valid');
            statusError.style.display = 'none';
        }

        // Validação da Data de Inserção
        const dtInsert = document.getElementById('dt_insert');
        const dtInsertError = document.getElementById('dt_insert-error');
        if (dtInsert.value.trim() === '') {
            dtInsert.classList.add('is-invalid');
            dtInsertError.style.display = 'block';
            isValid = false;
        } else {
            dtInsert.classList.remove('is-invalid');
            dtInsert.classList.add('is-valid');
            dtInsertError.style.display = 'none';
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
    } else if (actionToConfirm === 'excluir') {
        // Lógica para excluir o cadastro
        console.log('Cadastro excluído com sucesso!');
        // Aqui você pode chamar a função de exclusão
    }
});
