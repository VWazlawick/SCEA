// Habilita o tooltip do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Máscaras para CNPJ, Inscrição Estadual, Telefone e CEP
    IMask(document.getElementById('cnpj'), {
        mask: '00.000.000/0000-00'
    });

    IMask(document.getElementById('inscricao-estadual'), {
        mask: '000000000000000'
    });

    IMask(document.getElementById('telefone'), {
        mask: '(00) 00000-0000'
    });

    IMask(document.getElementById('cep'), {
        mask: '00000-000'
    });

    // Evento para preencher o endereço ao digitar o CEP
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('blur', function () {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('estado').value = data.uf;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('rua').value = data.logradouro;
                    } else {
                        alert('CEP não encontrado.');
                    }
                })
                .catch(() => alert('Erro ao buscar CEP.'));
        }
    });

    // Botão Salvar
    const saveButton = document.getElementById('saveButton');

    // Adicionando evento de clique ao botão Salvar
    saveButton.addEventListener('click', function () {
        if (validateForm()) {
            // Exibir modal de confirmação
            showModal();
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

    // Função para exibir o modal de confirmação
    function showModal() {
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        modal.show();

        // Ação de confirmação do modal
        document.getElementById('confirmYes').onclick = function () {
            modal.hide();
            // Aqui você pode adicionar a lógica para salvar os dados ou enviar o formulário
            alert('Empresa cadastrada com sucesso!');
        };
    }

    // Validação do formulário de cadastro de Empresa
    function validateForm() {
        let isValid = true;

        // Validação do Nome da Empresa
        const nomeEmpresa = document.getElementById('nome-empresa');
        if (nomeEmpresa.value.trim() === '') {
            nomeEmpresa.classList.add('is-invalid');
            document.getElementById('nome-empresa-error').style.display = 'block';
            isValid = false;
        } else {
            nomeEmpresa.classList.remove('is-invalid');
            nomeEmpresa.classList.add('is-valid');
            document.getElementById('nome-empresa-error').style.display = 'none';
        }

        // Validação do CNPJ
        const cnpj = document.getElementById('cnpj');
        const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
        if (!cnpjPattern.test(cnpj.value)) {
            cnpj.classList.add('is-invalid');
            document.getElementById('cnpj-error').style.display = 'block';
            isValid = false;
        } else {
            cnpj.classList.remove('is-invalid');
            cnpj.classList.add('is-valid');
            document.getElementById('cnpj-error').style.display = 'none';
        }

        // Validação da Inscrição Estadual
        const inscricaoEstadual = document.getElementById('inscricao-estadual');
        if (inscricaoEstadual.value.trim() === '') {
            inscricaoEstadual.classList.add('is-invalid');
            document.getElementById('inscricao-estadual-error').style.display = 'block';
            isValid = false;
        } else {
            inscricaoEstadual.classList.remove('is-invalid');
            inscricaoEstadual.classList.add('is-valid');
            document.getElementById('inscricao-estadual-error').style.display = 'none';
        }

        // Validação do Telefone
        const telefone = document.getElementById('telefone');
        const telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!telefonePattern.test(telefone.value)) {
            telefone.classList.add('is-invalid');
            document.getElementById('telefone-error').style.display = 'block';
            isValid = false;
        } else {
            telefone.classList.remove('is-invalid');
            telefone.classList.add('is-valid');
            document.getElementById('telefone-error').style.display = 'none';
        }

        // Validação do CEP
        const cep = document.getElementById('cep');
        const cepPattern = /^\d{5}-\d{3}$/;
        if (!cepPattern.test(cep.value)) {
            cep.classList.add('is-invalid');
            document.getElementById('cep-error').style.display = 'block';
            isValid = false;
        } else {
            cep.classList.remove('is-invalid');
            cep.classList.add('is-valid');
            document.getElementById('cep-error').style.display = 'none';
        }

        // Validação do Estado
        const estado = document.getElementById('estado');
        if (estado.value.trim() === '') {
            estado.classList.add('is-invalid');
            document.getElementById('estado-error').style.display = 'block';
            isValid = false;
        } else {
            estado.classList.remove('is-invalid');
            estado.classList.add('is-valid');
            document.getElementById('estado-error').style.display = 'none';
        }

        // Validação da Cidade
        const cidade = document.getElementById('cidade');
        if (cidade.value.trim() === '') {
            cidade.classList.add('is-invalid');
            document.getElementById('cidade-error').style.display = 'block';
            isValid = false;
        } else {
            cidade.classList.remove('is-invalid');
            cidade.classList.add('is-valid');
            document.getElementById('cidade-error').style.display = 'none';
        }

        // Validação da Rua
        const rua = document.getElementById('rua');
        if (rua.value.trim() === '') {
            rua.classList.add('is-invalid');
            document.getElementById('rua-error').style.display = 'block';
            isValid = false;
        } else {
            rua.classList.remove('is-invalid');
            rua.classList.add('is-valid');
            document.getElementById('rua-error').style.display = 'none';
        }

        // Validação do Número
        const numero = document.getElementById('numero');
        if (numero.value.trim() === '') {
            numero.classList.add('is-invalid');
            document.getElementById('numero-error').style.display = 'block';
            isValid = false;
        } else {
            numero.classList.remove('is-invalid');
            numero.classList.add('is-valid');
            document.getElementById('numero-error').style.display = 'none';
        }

        return isValid;
    }
});
