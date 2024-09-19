document.addEventListener('DOMContentLoaded', function () {
    // Botão Salvar
    const saveButton = document.getElementById('saveButton');

    // Adicionando evento de clique ao botão Salvar
    saveButton.addEventListener('click', function () {
        if (validateForm()) {
            // Exibir modal de confirmação
            showModal();
        }
    });

    // Função para exibir o modal de confirmação
    function showModal() {
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        modal.show();

        // Ação de confirmação do modal
        document.getElementById('confirmYes').onclick = function () {
            modal.hide();
            // Aqui você pode adicionar a lógica para salvar os dados ou enviar o formulário
            alert('Tipo de Serviço cadastrado com sucesso!');
        };
    }

    // Validação do formulário de cadastro de Tipo de Serviço
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
    }
});
