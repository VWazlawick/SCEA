document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function validateForm(){
    let isValid = true;

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

            document.getElementById('cadastroUsuarioForm').submit();
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

document.getElementById('tipo-usuario').addEventListener('blur', exibirVinculo);

document.getElementById('vinculo').addEventListener('input', function (){
    const nome = this.value;
    buscarPorNome(nome);
});

function exibirVinculo(){
    var tpUsuario = parseInt(document.getElementById('tipo-usuario').value);
    var vinculoDiv = document.getElementById('vinculoDiv');
    var vinculoInput = document.getElementById('vinculo');
    var vinculoLabel = document.querySelector('label[for="vinculo"]');

    if(tpUsuario === 1){
        vinculoDiv.style.display = 'none';
        vinculoInput.removeAttribute("th:field");
    }else if(tpUsuario === 2){
        vinculoDiv.style.display = 'block';
        vinculoInput.setAttribute("th:field", "*{professor}")
        vinculoInput.placeholder = "Preencha o nome do profissional"
        vinculoLabel.textContent = "Profissional"
    }else if(tpUsuario === 3){
        vinculoDiv.style.display = 'block';
        vinculoInput.setAttribute("th:field", "*{aluno}");
        vinculoInput.placeholder = "Preencha o nome do aluno"
        vinculoLabel.textContent = "Aluno"
    }
}

function buscarPorNome(nome){
    var tpUsuario = parseInt(document.getElementById('tipo-usuario').value);

    if(nome.length<3){
        document.getElementById('resultadoBusca').style.display = 'none';
        return
    }

    const url = tpUsuario === 2 ?
        `/profissional/buscarNome?nome=${encodeURIComponent(nome)}` :
        `/aluno/buscarNome?nome=${encodeURIComponent(nome)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultadoBusca = document.getElementById('resultadoBusca');

            resultadoBusca.innerHTML = '';

            if(data.length>0){
                resultadoBusca.style.display = 'block';
                data.forEach(item =>{
                    const li = document.createElement('li');

                    li.innerText = item.nome;
                    li.classList.add('list-group-item');
                    li.classList.add('list-group-item-action');
                    li.style.cursor = 'pointer';

                    li.onclick = function (){
                        document.getElementById('vinculo').value = item.nome;
                        document.getElementById('vinculoId').value = item.id;
                        resultadoBusca.style.display = 'none'
                    };
                    resultadoBusca.appendChild(li);
                });
            }else{
                resultadoBusca.style.display = 'none';
            }
        }).catch(error =>{
            console.error('Erro ao buscar: ', error)
    })
}

// JS da Pagina de Carregamento

document.addEventListener("DOMContentLoaded", function() {
    // Simula um tempo de carregamento (opcional)
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500); // Ajuste o tempo conforme necessário
});

