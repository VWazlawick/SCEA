function validateForm() {
    let isValid = true;

    // Validação do Nome do Tipo de Serviço
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

            document.getElementById('tipoServicoForm').submit();
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





