// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.getElementById('saveButton').addEventListener('click', function () {
    let isValid = true;

    // Validação do Nome de Usuário
    const nomeUsuario = document.getElementById('nome-usuario');
    const nomeError = document.getElementById('nome-error');
    if (nomeUsuario.value.trim() === '') {
        nomeUsuario.classList.add('is-invalid');
        nomeError.style.display = 'block';
        isValid = false;
    } else {
        nomeUsuario.classList.remove('is-invalid');
        nomeUsuario.classList.add('is-valid');
        nomeError.style.display = 'none';
    }

    // Validação do Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (email.value.trim() === '') {
        email.classList.add('is-invalid');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        emailError.style.display = 'none';
    }

    // Validação da Senha
    const senha = document.getElementById('senha');
    const senhaError = document.getElementById('senha-error');
    if (senha.value.trim() === '') {
        senha.classList.add('is-invalid');
        senhaError.style.display = 'block';
        isValid = false;
    } else {
        senha.classList.remove('is-invalid');
        senha.classList.add('is-valid');
        senhaError.style.display = 'none';
    }

    // Validação da Repetir Senha
    const repetirSenha = document.getElementById('repetir-senha');
    const repetirSenhaError = document.getElementById('repetir-senha-error');
    if (repetirSenha.value.trim() === '' || repetirSenha.value !== senha.value) {
        repetirSenha.classList.add('is-invalid');
        repetirSenhaError.style.display = 'block';
        isValid = false;
    } else {
        repetirSenha.classList.remove('is-invalid');
        repetirSenha.classList.add('is-valid');
        repetirSenhaError.style.display = 'none';
    }

    // Validação do Tipo de Usuário
    const tipoUsuario = document.getElementById('tipo-usuario');
    const tipoUsuarioError = document.getElementById('tipo-usuario-error');
    if (tipoUsuario.value === 'Selecione') {
        tipoUsuario.classList.add('is-invalid');
        tipoUsuarioError.style.display = 'block';
        isValid = false;
    } else {
        tipoUsuario.classList.remove('is-invalid');
        tipoUsuario.classList.add('is-valid');
        tipoUsuarioError.style.display = 'none';
    }

    // Validação do Vínculo
    const vinculo = document.getElementById('vinculo');
    const vinculoError = document.getElementById('vinculo-error');
    if (vinculo.value === 'Selecione') {
        vinculo.classList.add('is-invalid');
        vinculoError.style.display = 'block';
        isValid = false;
    } else {
        vinculo.classList.remove('is-invalid');
        vinculo.classList.add('is-valid');
        vinculoError.style.display = 'none';
    }

    if (isValid) {
        // Lógica para salvar o cadastro
        alert('Cadastro realizado com sucesso!');
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

document.getElementById('sairButton').addEventListener('click', function () {
    openConfirmationModal('sair');
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
    } else if (actionToConfirm === 'sair') {
        // Lógica para sair da página ou do formulário
        window.location.href = 'pagina_de_saida.html'; // Redireciona para uma página de saída, por exemplo
    } else if (actionToConfirm === 'excluir') {
        // Lógica para excluir o cadastro
        console.log('Cadastro excluído com sucesso!');
        // Aqui você pode chamar a função de exclusão
    }
});

