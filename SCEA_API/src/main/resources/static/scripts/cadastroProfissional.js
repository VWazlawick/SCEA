IMask(document.getElementById('cpf'), { mask: '000.000.000-00' });
IMask(document.getElementById('telefone'), { mask: '(00) 00000-0000' });
IMask(document.getElementById('rg'), { mask: '00.000.000-0' });

// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
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
    const rgPattern = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;

    if (!rgPattern.test(rg.value)) {
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
    const telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!telefonePattern.test(telefone.value)) {
        telefonePattern.classList.add('is-invalid');
        telefoneError.parentElement.appendChild('is-invalid');
        isValid = false;
    } else {
        telefone.classList.remove('is-invalid');
        telefone.classList.add('is-valid');
        telefoneError.style.display = 'none';
    }

    // Validação do Status Ativo
    const statusAtivo = document.getElementById('ativo');
    const statusError = document.getElementById('status-error');
    if (statusAtivo.value === 'Selecione') {
        statusAtivo.classList.add('is-invalid');
        statusError.style.display = 'block';
        isValid = false;
    } else {
        statusAtivo.classList.remove('is-invalid');
        statusAtivo.classList.add('is-valid');
    }

    return isValid;
}

// Mostrar modal ao clicar em Salvar
document.getElementById('saveButton').addEventListener('click', function() {
    if (validateForm()) {
        showModal("salvar");
    }
});

// Função para exibir o modal de confirmação
function showModal(action) {
    var modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();

    document.getElementById('confirmYes').onclick = function() {
        modal.hide();
        if (action === "salvar") {
            showProgressBar();

            document.getElementById('cadastroProfissionalForm').submit();
        }
    };
}

// Função de feedback visual no envio
function showProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const successMessage = document.getElementById('success-message');

    progressContainer.style.display = 'block';
    progressBar.style.width = '100%';

    setTimeout(function() {
        progressContainer.style.display = 'none';
        successMessage.style.display = 'block';
    }, 2000);
}
