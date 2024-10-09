document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let escalaEditando = null;  // Variável para guardar o item da escala que está sendo editado

    // Limpar campos do modal ao abrir
    document.getElementById('addEscala').addEventListener('click', function () {
        const addOptionModal = new bootstrap.Modal(document.getElementById('addOptionModal'));

        // Limpar campos do modal antes de abrir
        document.getElementById('newOptionDescription').value = '';
        document.getElementById('newOptionMin').value = '';
        document.getElementById('newOptionMax').value = '';
        document.getElementById('limite-bom').selectedIndex = 0;

        escalaEditando = null; // Resetar variável de edição
        addOptionModal.show();
    });

    // Função para fechar o modal e remover o backdrop (caso necessário)
    function fecharModal() {
        const addOptionModal = bootstrap.Modal.getInstance(document.getElementById('addOptionModal'));
        addOptionModal.hide();

        // Garantir que o backdrop (fundo cinza) seja removido
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }

    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        const descricaoPergunta = document.getElementById('descricao-pergunta');
        const descricaoPerguntaError = document.getElementById('descricao-pergunta-error');
        if (descricaoPergunta.value.trim() === '') {
            descricaoPergunta.classList.add('is-invalid');
            descricaoPerguntaError.style.display = 'block';
            isValid = false;
        } else {
            descricaoPergunta.classList.remove('is-invalid');
            descricaoPergunta.classList.add('is-valid');
            descricaoPerguntaError.style.display = 'none';
        }

        const tipoPergunta = document.getElementById('tipo-pergunta');
        const tipoPerguntaError = document.getElementById('tipo-pergunta-error');
        if (tipoPergunta.value === 'Selecione') {
            tipoPergunta.classList.add('is-invalid');
            tipoPerguntaError.style.display = 'block';
            isValid = false;
        } else {
            tipoPergunta.classList.remove('is-invalid');
            tipoPergunta.classList.add('is-valid');
            tipoPerguntaError.style.display = 'none';
        }

        const subGrupos = document.getElementById('sub-grupos');
        const subGruposError = document.getElementById('sub-grupos-error');
        if (subGrupos.value === 'Selecione') {
            subGrupos.classList.add('is-invalid');
            subGruposError.style.display = 'block';
            isValid = false;
        } else {
            subGrupos.classList.remove('is-invalid');
            subGrupos.classList.add('is-valid');
            subGruposError.style.display = 'none';
        }

        const escalas = document.querySelectorAll('.escala-checkbox');
        const escalaError = document.getElementById('escala-error');
        const checkedEscalas = Array.from(escalas).some(checkbox => checkbox.checked);
        if (!checkedEscalas) {
            escalaError.style.display = 'block';
            isValid = false;
        } else {
            escalaError.style.display = 'none';
        }

        return isValid;
    }

    // Adicionar ou editar escala no Modal
    document.getElementById('confirmAddOption').addEventListener('click', function () {
        const descricao = document.getElementById('newOptionDescription').value;
        const min = document.getElementById('newOptionMin').value;
        const max = document.getElementById('newOptionMax').value;
        const limiteBom = document.getElementById('limite-bom').value;

        // Validação do campo Escala Mínima
        if (min.trim() === '') {
            document.getElementById('newOptionMin').classList.add('is-invalid'); // Adiciona classe de erro
            return; // Impede o fechamento do modal se o campo estiver vazio
        } else {
            document.getElementById('newOptionMin').classList.remove('is-invalid'); // Remove classe de erro se o campo estiver preenchido
        }

        if (escalaEditando) {
            // Atualizar a escala existente
            const label = escalaEditando.querySelector('label');
            label.innerText = `${descricao} (Min: ${min}, Max: ${max}, Limite: ${limiteBom})`;
            escalaEditando.querySelector('input').value = descricao;
        } else {
            // Adicionar nova escala à lista
            addEscalaToList(descricao, min, max, limiteBom);
        }

        fecharModal();
    });

    // Função para adicionar uma nova escala à lista
    function addEscalaToList(descricao, min, max, limiteBom) {
        const listaEscalas = document.getElementById('lista-escalas');
        const escalaItem = document.createElement('div');
        escalaItem.className = 'form-check d-flex align-items-center mb-2';

        const checkbox = document.createElement('input');
        checkbox.className = 'form-check-input escala-checkbox';
        checkbox.type = 'checkbox';
        checkbox.value = descricao;

        const label = document.createElement('label');
        label.className = 'form-check-label ms-2';
        label.innerText = `${descricao} (Min: ${min}, Max: ${max}, Limite: ${limiteBom})`;

        const editButton = document.createElement('button');
        editButton.className = 'btn btn-sm btn-outline-primary ms-auto';
        editButton.innerText = 'Editar';
        editButton.addEventListener('click', (event) => {
            event.preventDefault();  // Evitar que o botão faça um "submit" ou limpe o formulário
            abrirModalEdicao(escalaItem, descricao, min, max, limiteBom);
        });

        escalaItem.appendChild(checkbox);
        escalaItem.appendChild(label);
        escalaItem.appendChild(editButton);

        listaEscalas.appendChild(escalaItem);
    }

    // Função para abrir o modal de edição de uma escala
    function abrirModalEdicao(escalaItem, descricao, min, max, limiteBom) {
        const addOptionModal = new bootstrap.Modal(document.getElementById('addOptionModal'));

        // Preencher os campos com os dados da escala a ser editada
        document.getElementById('newOptionDescription').value = descricao;
        document.getElementById('newOptionMin').value = min;
        document.getElementById('newOptionMax').value = max;
        document.getElementById('limite-bom').value = limiteBom;

        escalaEditando = escalaItem; // Guardar o item que está sendo editado

        addOptionModal.show();
    }

    // Evento de clique no botão Limpar
    document.getElementById('clearButton').addEventListener('click', () => {
        document.getElementById('perguntasForm').reset();
        document.querySelectorAll('.is-invalid, .is-valid').forEach(element => {
            element.classList.remove('is-invalid', 'is-valid');
        });
        document.querySelectorAll('.error-message').forEach(element => {
            element.style.display = 'none';
        });
    });

    // Evento de clique no botão Sair
    document.getElementById('sairButton').addEventListener('click', () => {
        var confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
        confirmModal.show();
        document.getElementById('confirmYes').addEventListener('click', () => {
            alert('Saindo da página.');
        });
    });

    // Evento de clique no botão Excluir
    document.getElementById('excluirButton').addEventListener('click', () => {
        var confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
        confirmModal.show();
        document.getElementById('confirmYes').addEventListener('click', () => {
            alert('Item excluído com sucesso.');
        });
    });

    // Evento de clique no botão Salvar
    document.getElementById('saveButton').addEventListener('click', () => {
        if (validateForm()) {
            var confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
            confirmModal.show();
            document.getElementById('confirmYes').addEventListener('click', () => {
                alert('Formulário salvo com sucesso.'); 
                confirmModal.hide(); 
            });

        } else {
            // Se a validação falhar, você pode destacar os campos com erro.
            // Não exibe nenhum alerta ou modal, pois a própria validação já faz o destaque.
        }
    });

    // Tooltip Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
