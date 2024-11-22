function validateForm() {
    let isValid = true;

    const descricaoGrupo = document.getElementById('descricao-grupo');
    const descricaoGrupoError = document.getElementById('descricao-grupo-error');
    if (descricaoGrupo.value.trim() === '') {
        descricaoGrupo.classList.add('is-invalid');
        descricaoGrupoError.style.display = 'block';
        isValid = false;
    } else {
        descricaoGrupo.classList.remove('is-invalid');
        descricaoGrupo.classList.add('is-valid');
        descricaoGrupoError.style.display = 'none';
    }

    const subgrupo = document.getElementById('subgrupo');
    const subgrupoError = document.getElementById('subgrupo-error');
    if (subgrupo.value === 'Selecione') {
        subgrupo.classList.add('is-invalid');
        subgrupoError.style.display = 'block';
        isValid = false;
    } else {
        subgrupo.classList.remove('is-invalid');
        subgrupo.classList.add('is-valid');
        subgrupoError.style.display = 'none';
    }

    const idadeInicial = document.getElementById('idade-inicial');
    const idadeInicialError = document.getElementById('idade-inicial-error');
    if (idadeInicial.value.trim() === '') {
        idadeInicial.classList.add('is-invalid');
        idadeInicialError.style.display = 'block';
        isValid = false;
    } else {
        idadeInicial.classList.remove('is-invalid');
        idadeInicial.classList.add('is-valid');
        idadeInicialError.style.display = 'none';
    }


    const idadeFinal = document.getElementById('idade-final');
    const idadeFinalError = document.getElementById('idade-final-error');
    if (idadeFinal.value.trim() === '') {
        idadeFinal.classList.add('is-invalid');
        idadeFinalError.style.display = 'block';
        isValid = false;
    } else {
        idadeFinal.classList.remove('is-invalid');
        idadeFinal.classList.add('is-valid');
        idadeFinalError.style.display = 'none';
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

            document.getElementById('grupoForm').submit();
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

document.getElementById('saveButton').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[name="subGrupos"]:checked');
    const error = document.getElementById('subgrupo-error');

    if (checkboxes.length === 0) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});