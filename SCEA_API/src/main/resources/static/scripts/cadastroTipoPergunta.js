function validateForm(){
    let isValid = true;

    const descricao = document.getElementById("descricao");
    const descricaoError = document.getElementById("descricao-error")

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

document.getElementById('saveButton').addEventListener('click', function() {
    if (validateForm()) {
        showModal("salvar");
    }
});


function showModal(action) {
    var modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();

    document.getElementById('confirmYes').onclick = function() {
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

    setTimeout(function() {
        progressContainer.style.display = 'none';
        successMessage.style.display = 'block';
    }, 2000);
};


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("adicionarOpcao").addEventListener("click", function () {
        const container = document.getElementById("opcaoContainer");
        const index = container.children.length;

        const div = document.createElement('div');
        div.innerHTML = `
                <label>Opção ${index+1}</label>
                <input type="text" name="opcoes[${index}].descricao"/>
                <button type="button" onclick="removeEscala(this)">Remover</button>`;

        container.appendChild(div);
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Inicializa o componente Choices.js no dropdown
//     const choices = new Choices('#opcoesDropdown', {
//         removeItemButton: true,
//         searchEnabled: false,
//         shouldSort: false,
//         placeholder: true,
//         placeholderValue: 'Selecione uma ou mais opções',
//         noResultsText: 'Nenhuma opção encontrada',
//         noChoicesText: 'Sem opções disponíveis',
//         itemSelectText: 'Pressione para selecionar'
//     });

    // document.getElementById('addOption').addEventListener('click', function () {
    //     const descricao = document.getElementById('descricao').value;
    //     const estilo = document.getElementById('tipo-pergunta').value;
    //     const opcoes = document.getElementById('opcoesDropdown');
    //     const opcoesItens = Array.from(opcoes.selectedOptions).map(option => ({
    //         id: option.value,
    //         descricao: option.text
    //     }));
    //
    //
    //     localStorage.setItem('descricao', descricao);
    //     localStorage.setItem('estilo', estilo);
    //     localStorage.setItem('opcoes', JSON.stringify(opcoesItens));
    //
    //     const addOptionModal = new bootstrap.Modal(document.getElementById('addOptionModal'));
    //     addOptionModal.show();
    // });

    // Função para adicionar nova opção ao dropdown
    // document.getElementById('confirmAddOption').addEventListener('click', function () {
    //     const newOptionDescription = document.getElementById('newOptionDescription').value.trim();
    //
    //     if (newOptionDescription !== '') {
    //         document.getElementById('newOptionDescription').value = newOptionDescription;
    //
    //         document.querySelector('#addOptionModal form').submit();
    //
    //         choices.setChoices([{ value: newOptionDescription, label: newOptionDescription, selected: false }]);
    //
    //         // Limpar campo de entrada do modal
    //         document.getElementById('newOptionDescription').value = '';
    //
    //         // Fechar o modal após adicionar
    //         const addOptionModal = bootstrap.Modal.getInstance(document.getElementById('addOptionModal'));
    //         addOptionModal.hide();
    //     } else {
    //         alert('Por favor, insira a descrição da opção.');
    //     }
    // });
// });

// document.addEventListener('DOMContentLoaded',function (){
//     const estilo = localStorage.getItem('estilo');
//     const descricao = localStorage.getItem('descricao');
//
//     document.getElementById('descricao').value = descricao;
//     document.getElementById('tipo-pergunta').value = estilo;
//
//     const opcoes = JSON.parse(localStorage.getItem('opcoes')) || [];
//     const lista = document.getElementById('opcoesDropdown');
//
//     opcoes.forEach(opcao =>{
//         const opcaoItem = Array.from(lista.options).find(option => option.value === String(opcao.id));
//         if(opcaoItem){
//             opcaoItem.selected = true;
//         }
//     })
// })






