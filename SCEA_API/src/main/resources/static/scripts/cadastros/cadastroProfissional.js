IMask(document.getElementById('cpf'), { mask: '000.000.000-00' });
IMask(document.getElementById('telefone'), { mask: '(00) 00000-0000' });
IMask(document.getElementById('rg'), { mask: '00.000.000-0' });

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function validateForm() {
    let isValid = true;

    const nome = document.getElementById('nome');
    const nomeError = document.getElementById('nome-error');
    if (nome.value.trim() === '') {
        nome.classList.add('is-invalid');
        nomeError.textContent = 'O campo Nome é obrigatório.';
        nomeError.style.display = 'block';
        isValid = false;
    } else {
        nome.classList.remove('is-invalid');
        nome.classList.add('is-valid');
        nomeError.style.display = 'none';
    }

    const empresa = document.getElementById('empresa');
    const empresaError = document.getElementById('empresa-error');
    if (empresa.value === '') {
        empresa.classList.add('is-invalid');
        empresaError.textContent = 'O campo Empresa é obrigatório.';
        empresaError.style.display = 'block';
        isValid = false;
    } else {
        empresa.classList.remove('is-invalid');
        empresa.classList.add('is-valid');
        empresaError.style.display = 'none';
    }

    const cpf = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfPattern.test(cpf.value)) {
        cpf.classList.add('is-invalid');
        cpfError.textContent = 'CPF inválido.';
        cpfError.style.display = 'block';
        isValid = false;
    } else {
        cpf.classList.remove('is-invalid');
        cpf.classList.add('is-valid');
        cpfError.style.display = 'none';
    }

    const rg = document.getElementById('rg');
    const rgError = document.getElementById('rg-error');
    const rgPattern = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
    if (!rgPattern.test(rg.value)) {
        rg.classList.add('is-invalid');
        rgError.textContent = 'RG inválido.';
        rgError.style.display = 'block';
        isValid = false;
    } else {
        rg.classList.remove('is-invalid');
        rg.classList.add('is-valid');
        rgError.style.display = 'none';
    }

    const telefone = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefone-error');
    const telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!telefonePattern.test(telefone.value)) {
        telefone.classList.add('is-invalid');
        telefoneError.textContent = 'Telefone inválido.';
        telefoneError.style.display = 'block';
        isValid = false;
    } else {
        telefone.classList.remove('is-invalid');
        telefone.classList.add('is-valid');
        telefoneError.style.display = 'none';
    }

    return isValid;
}

document.getElementById('saveButton').addEventListener('click', function() {
    if (validateForm()) {
        showModal("salvar");
    }
});

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

document.getElementById('clearButton').addEventListener('click', function() {
    const form = document.getElementById('cadastroProfissionalForm');
    form.reset();
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
});

// JS da Pagina de Carregamento
document.addEventListener("DOMContentLoaded", function() {
    // Simula um tempo de carregamento (opcional)
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500); // Ajuste o tempo conforme necessário
});