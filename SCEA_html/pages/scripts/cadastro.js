// Máscaras para CPF, Telefone, e CEP
IMask(document.getElementById('cpf'), { mask: '000.000.000-00' });
IMask(document.getElementById('telefone'), { mask: '(00) 00000-0000' });
IMask(document.getElementById('cep'), { mask: '00000-000' });

// Função de busca de endereço pelo CEP via API do ViaCEP
document.getElementById('cep').addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, '');

    if (cep !== "") {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('estado').value = data.uf;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('rua').value = data.logradouro;
                } else {
                    alert("CEP não encontrado.");
                }
            })
            .catch(error => {
                alert("Erro ao buscar CEP.");
                console.error("Erro:", error);
            });
    }
});

// Validação simples
function validateForm() {
    let isValid = true;

    // Validação do Nome Completo
    const nomeCompleto = document.getElementById('nome-completo');
    const nomeError = document.getElementById('nome-error');
    if (nomeCompleto.value.trim() === '') {
        nomeCompleto.classList.add('is-invalid');
        nomeError.style.display = 'block';
        isValid = false;
    } else {
        nomeCompleto.classList.remove('is-invalid');
        nomeCompleto.classList.add('is-valid');
        nomeError.style.display = 'none';
    }

    // Validação de CPF
    const cpf = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfPattern.test(cpf.value)) {
        cpf.classList.add('is-invalid');
        cpfError.style.display = 'block';
        isValid = false;
    } else {
        cpf.classList.remove('is-invalid');
        cpf.classList.add('is-valid');
        cpfError.style.display = 'none';
    }

    // Validação de RG
    const rg = document.getElementById('rg');
    const rgError = document.getElementById('rg-error');
    const rgPattern = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
    if (!rgPattern.test(rg.value)) {
        rg.classList.add('is-invalid');
        rgError.style.display = 'block';
        isValid = false;
    } else {
        rg.classList.remove('is-invalid');
        rg.classList.add('is-valid');
        rgError.style.display = 'none';
    }

    return isValid;
}

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

// Limpar todos os campos
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('cadastroForm').reset();
    document.querySelectorAll('.is-valid, .is-invalid').forEach(field => field.classList.remove('is-valid', 'is-invalid'));
});
