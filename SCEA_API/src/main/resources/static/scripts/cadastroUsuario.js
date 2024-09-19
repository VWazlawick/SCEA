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
            alert('Usuário cadastrado com sucesso!');
        };
    }

    // Validação do formulário de cadastro de usuário
    function validateForm() {
        let isValid = true;

        // Validação do Nome de Usuário
        const nomeUsuario = document.getElementById('nome-usuario');
        if (nomeUsuario.value.trim() === '') {
            nomeUsuario.classList.add('is-invalid');
            isValid = false;
        } else {
            nomeUsuario.classList.remove('is-invalid');
            nomeUsuario.classList.add('is-valid');
        }

        // Validação do Email
        const email = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        // Validação da Senha
        const senha = document.getElementById('senha');
        if (senha.value.trim() === '') {
            senha.classList.add('is-invalid');
            isValid = false;
        } else {
            senha.classList.remove('is-invalid');
            senha.classList.add('is-valid');
        }

        // Validação da Repetição de Senha
        const repetirSenha = document.getElementById('repetir-senha');
        if (repetirSenha.value.trim() === '' || repetirSenha.value !== senha.value) {
            repetirSenha.classList.add('is-invalid');
            isValid = false;
        } else {
            repetirSenha.classList.remove('is-invalid');
            repetirSenha.classList.add('is-valid');
        }

        // Validação do Tipo de Usuário
        const tipoUsuario = document.getElementById('tipo-usuario');
        if (tipoUsuario.value === 'Selecione') {
            tipoUsuario.classList.add('is-invalid');
            isValid = false;
        } else {
            tipoUsuario.classList.remove('is-invalid');
            tipoUsuario.classList.add('is-valid');
        }

        // Validação do Vínculo
        const vinculo = document.getElementById('vinculo');
        if (vinculo.value === 'Selecione') {
            vinculo.classList.add('is-invalid');
            isValid = false;
        } else {
            vinculo.classList.remove('is-invalid');
            vinculo.classList.add('is-valid');
        }

        return isValid;
    }
});
