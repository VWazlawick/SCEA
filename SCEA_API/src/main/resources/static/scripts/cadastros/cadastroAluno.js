
    IMask(document.getElementById('cpf'), { mask: '000.000.000-00' });
    IMask(document.getElementById('telefone'), { mask: '(00) 00000-0000' });
    IMask(document.getElementById('cep'), { mask: '00000-000' });
    IMask(document.getElementById('rg'), { mask: '00.000.000-0' });

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

    function validateForm() {
        let isValid = true;

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

        validateField('nome-completo', 'nome-error', 'Nome completo é obrigatório.');

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

        validateField('data-nascimento', 'data-error', 'Data de nascimento é obrigatória.');

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

                document.getElementById('cadastroForm').submit();
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

    // JS da Pagina de Carregamento

    document.addEventListener("DOMContentLoaded", function() {
        // Simula um tempo de carregamento (opcional)
        setTimeout(function() {
            document.getElementById("loadingScreen").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 2500); // Ajuste o tempo conforme necessário
    });

    /*document.addEventListener('DOMContentLoaded', function (){
        const dtNascimentoInput = document.getElementById('data-nascimento');

        if(dtNascimentoInput){
            const dtNascimento = dtNascimentoInput.value;
            console.log("Input: " + dtNascimentoInput);

            if(dtNascimento){
                const dtLimpa = dtNascimento.split('/');
                console.log("Data limpa: " + dtLimpa);

                if(dtLimpa.length===3){
                    const dtFormatada = `${dtLimpa[2]}-${dtLimpa[1]}-${dtLimpa[0]}`;
                    console.log('Data formatada:', dtFormatada);

                    document.getElementById('data-nascimento').value = dtFormatada;
                    console.log('Novo valor de data-nascimento:', dtNascimentoInput.value);
                }else {
                    console.error('Formato de data inválido.'); // Log de erro se o formato não for válido
                }
            }else {
                console.warn('O campo data-nascimento está vazio.'); // Log de aviso se o campo estiver vazio
            }
        }else {
            console.error('Elemento data-nascimento não encontrado.'); // Log de erro se o elemento não existir
        }
    })*/