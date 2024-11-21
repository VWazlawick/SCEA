function validateForm() {
    let isValid = true;

    const descricao = document.getElementById("descricao");
    const descricaoError = document.getElementById("descricao-error");

    if (descricao.value.trim() === '') {
        descricao.classList.add('is-invalid');
        descricaoError.textContent = 'O campo Nome é obrigatório.';
        descricaoError.style.display = 'block';
        isValid = false;
    } else {
        descricao.classList.remove('is-invalid');
        descricao.classList.add('is-valid');
        descricaoError.style.display = 'none';
    }

    const estiloPergunta = document.getElementById("tipo-pergunta");

    if (estiloPergunta.value.trim() === '') {
        estiloPergunta.classList.add('is-invalid');
        isValid = false;
    } else {
        estiloPergunta.classList.remove('is-invalid');
        estiloPergunta.classList.add('is-valid');
    }

    return isValid;
}

document.getElementById('saveButton').addEventListener('click', function () {
    if (validateForm()) {
        showModal("salvar");
    }
});

function showModal(action) {
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();

    document.getElementById('confirmYes').onclick = function () {
        localStorage.setItem('descricao', '');
        localStorage.setItem('estilo', '');

        modal.hide();
        if (action === "salvar") {
            showProgressBar();
            document.getElementById('tipoPerguntaForm').submit();
        }
    };
}

function showProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const successMessage = document.getElementById('success-message');

    progressContainer.style.display = 'block';
    progressBar.style.width = '100%';

    setTimeout(function () {
        progressContainer.style.display = 'none';
        successMessage.style.display = 'block';
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adicionarOpcao").addEventListener("click", function () {
        const container = document.getElementById("opcaoContainer");
        const index = container.children.length;

        const div = document.createElement('div');
        div.className = 'd-flex align-items-center mb-2';

        div.innerHTML = `
            <input type="text" class="form-control me-2" name="opcoes[${index}].descricao" placeholder="Digite a descrição">
            <button type="button" class="btn btn-custom-roxo button-remover" onclick="removeOpcao(this)">Remover</button>
        `;

        container.appendChild(div);
    });
});

function removeOpcao(button) {
    const div = button.parentNode;
    div.remove();
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});

document.addEventListener("DOMContentLoaded", function(){
    function mostrarOpcao(){
        const tipoPerguntaSelect = document.getElementById("tipo-pergunta");
        const opcaoWrapper = document.getElementById("opcaoWrapper");

        if(tipoPerguntaSelect.value === "MULTIPLA_ESCOLHA"){
            opcaoWrapper.style.display = "block";
        }else{
            opcaoWrapper.style.display= "none";
        }

    }

    mostrarOpcao();

    const tipoPerguntaSelect = document.getElementById("tipo-pergunta");
    tipoPerguntaSelect.addEventListener("change", mostrarOpcao);
});