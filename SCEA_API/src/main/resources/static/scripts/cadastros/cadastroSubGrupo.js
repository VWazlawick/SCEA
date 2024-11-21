function validateForm() {
    let isValid = true;

    const nomeSubGrupo = document.getElementById('nome-subgrupo');
    const nomeSubGrupoError = document.getElementById('nome-subgrupo-error');
    if (nomeSubGrupo.value.trim() === '') {
        nomeSubGrupo.classList.add('is-invalid');
        nomeSubGrupoError.style.display = 'block';
        isValid = false;
    } else {
        nomeSubGrupo.classList.remove('is-invalid');
        nomeSubGrupo.classList.add('is-valid');
        nomeSubGrupoError.style.display = 'none';
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

            document.getElementById('subGrupoForm').submit();
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

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});