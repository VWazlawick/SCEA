function validateForm() {
    let isValid = true;

    const nomeTipoServico = document.getElementById('nome-tipo-servico');
    if (nomeTipoServico.value.trim() === '') {
        nomeTipoServico.classList.add('is-invalid');
        document.getElementById('nome-tipo-servico-error').style.display = 'block';
        isValid = false;
    } else {
        nomeTipoServico.classList.remove('is-invalid');
        nomeTipoServico.classList.add('is-valid');
        document.getElementById('nome-tipo-servico-error').style.display = 'none';
    }

    return isValid;
};

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

            document.getElementById('tipoServicoForm').submit();
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

// JS da Pagina de Carregamento
document.addEventListener("DOMContentLoaded", function() {
    // Simula um tempo de carregamento (opcional)
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500); // Ajuste o tempo conforme necessário
});