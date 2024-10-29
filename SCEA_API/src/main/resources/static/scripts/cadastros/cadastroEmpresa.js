IMask(document.getElementById('cnpj'), { mask: '00.000.000/0000-00'});

function validateForm() {
    let isValid = true;

    const nomeEmpresa = document.getElementById('razaoSocial');
    if (nomeEmpresa.value.trim() === '') {
        nomeEmpresa.classList.add('is-invalid');
        document.getElementById('nome-empresa-error').style.display = 'block';
        isValid = false;
    } else {
        nomeEmpresa.classList.remove('is-invalid');
        nomeEmpresa.classList.add('is-valid');
        document.getElementById('nome-empresa-error').style.display = 'none';
    }

    const cnpj = document.getElementById('cnpj');
    const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjPattern.test(cnpj.value)) {
        cnpj.classList.add('is-invalid');
        document.getElementById('cnpj-error').style.display = 'block';
        isValid = false;
    } else {
        cnpj.classList.remove('is-invalid');
        cnpj.classList.add('is-valid');
        document.getElementById('cnpj-error').style.display = 'none';
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

            document.getElementById('cadastroEmpresaForm').submit();
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
    document.getElementById('cadastroForm').reset();
    document.querySelectorAll('.is-valid, .is-invalid').forEach(field => field.classList.remove('is-valid', 'is-invalid'));
});
