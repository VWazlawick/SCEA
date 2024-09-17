    // Máscaras para CPF, Telefone, e CEP
    IMask(document.getElementById('cpf'), { mask: '000.000.000-00' });
    IMask(document.getElementById('telefone'), { mask: '(00) 00000-0000' });
    IMask(document.getElementById('cep'), { mask: '00000-000' });
    IMask(document.getElementById('rg'), { mask: '00.000.000-0' });

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
                        document.getElementById('cidadeId').value = data.ibge;

                        const cidadeId = document.getElementById('cidadeId').value;

                        fetch('/aluno/buscarEstado', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: new URLSearchParams({
                                'cidadeId': cidadeId
                            })
                        })
                            .then(response => response.json())
                            .then(estadoId => {
                                document.getElementById('estadoId').value = estadoId;
                            })
                            .catch(error => {
                                console.error("Erro ao buscar Estado:", error);
                            });
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

        // Função auxiliar para validação de campos vazios
        function validateField(fieldId, errorId, errorMessage) {
            const field = document.getElementById(fieldId);
            const error = document.getElementById(errorId);
            if (field.value.trim() === '') {
                field.classList.add('is-invalid');
                error.style.display = 'block';
                error.textContent = errorMessage;
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
                error.style.display = 'none';
            }
        }

        // Validação de Nome Completo
        validateField('nome-completo', 'nome-error', 'Nome completo é obrigatório.');

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
            rgError.textContent = 'RG inválido.';
            isValid = false;
        } else {
            rg.classList.remove('is-invalid');
            rg.classList.add('is-valid');
            rgError.style.display = 'none';
        }

        // Validação de Data de Nascimento
        validateField('data-nascimento', 'data-error', 'Data de nascimento é obrigatória.');

        // Validação de Telefone
        const telefone = document.getElementById('telefone');
        const telefoneError = document.createElement('span');
        telefoneError.className = 'error-message';
        telefoneError.textContent = 'Telefone inválido.';
        const telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!telefonePattern.test(telefone.value)) {
            telefone.classList.add('is-invalid');
            telefone.parentElement.appendChild(telefoneError);
            isValid = false;
        } else {
            telefone.classList.remove('is-invalid');
            telefone.classList.add('is-valid');
            telefoneError.style.display = 'none';
        }

        // Validação de CEP
        const cep = document.getElementById('cep');
        const cepError = document.createElement('span');
        cepError.className = 'error-message';
        cepError.textContent = 'CEP inválido.';
        const cepPattern = /^\d{5}-\d{3}$/;
        if (!cepPattern.test(cep.value)) {
            cep.classList.add('is-invalid');
            cep.parentElement.appendChild(cepError);
            isValid = false;
        } else {
            cep.classList.remove('is-invalid');
            cep.classList.add('is-valid');
            cepError.style.display = 'none';
        }

        // Validação de campos obrigatórios (genérica)
        const requiredFields = [
            { id: 'nome-responsavel', errorId: 'nome-responsavel-error', errorMessage: 'Nome do responsável é obrigatório.' },
            { id: 'professor', errorId: 'professor-error', errorMessage: 'Selecione um professor.' },
            { id: 'tipo-servico', errorId: 'tipo-servico-error', errorMessage: 'Selecione um tipo de serviço.' },
            { id: 'estado', errorId: 'estado-error', errorMessage: 'Estado é obrigatório.' },
            { id: 'cidade', errorId: 'cidade-error', errorMessage: 'Cidade é obrigatória.' },
            { id: 'rua', errorId: 'rua-error', errorMessage: 'Rua é obrigatória.' },
            { id: 'numero', errorId: 'numero-error', errorMessage: 'Número é obrigatório.' },
            { id: 'data-inicio', errorId: 'data-inicio-error', errorMessage: 'Data de início é obrigatória.' },
            { id: 'peso', errorId: 'peso-error', errorMessage: 'Peso é obrigatório.' },
            { id: 'altura', errorId: 'altura-error', errorMessage: 'Altura é obrigatória.' },
            { id: 'cintura', errorId: 'cintura-error', errorMessage: 'Cintura é obrigatória.' },
            { id: 'envergadura', errorId: 'envergadura-error', errorMessage: 'Envergadura é obrigatória.' }
        ];

        requiredFields.forEach(field => validateField(field.id, field.errorId, field.errorMessage));

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

                document.getElementById('cadastroForm').submit();
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

    document.getElementById('altura').addEventListener('blur', function(){
        var peso = parseFloat(document.getElementById('peso').value);
        var altura = parseFloat(document.getElementById('altura').value);

        var altura = altura/100;

        function calcularIMC(peso, altura){
            if(peso>0 && altura>0){
                return(peso/(altura*altura)).toFixed(2);
            }else{
                return '';
            }
        }
        document.getElementById('imc').value = calcularIMC(peso, altura);
    })

    document.getElementById('cintura').addEventListener('blur', function (){
        var altura = parseFloat(document.getElementById('altura').value);
        var cintura = parseFloat(document.getElementById('cintura').value);

        function calcularRCE(altura, cintura){
            if(altura>0 && cintura>0){
                return(cintura/altura).toFixed(2);
            }
            else{
                return '';
            }
        }
        document.getElementById('rce').value = calcularRCE(altura, cintura);
    })