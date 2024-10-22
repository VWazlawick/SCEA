document.addEventListener('DOMContentLoaded', () => {
    const alunoSelect = document.getElementById('alunoSelect');
    const avaliacoesContainer = document.getElementById('avaliacoesContainer');

// Função para abrir e fechar o menu lateral
document.getElementById('toggleMenu').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebarMenu');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});

// Função para fechar o menu lateral
document.getElementById('closeMenu').addEventListener('click', function () {
    document.getElementById('sidebarMenu').classList.remove('active');
});

// Função para alternar submenus
var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var submenu = document.getElementById(item.getAttribute('data-toggle'));
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});


    // Exibir avaliações ao selecionar um aluno
    alunoSelect.addEventListener('change', () => {
        const alunoId = alunoSelect.value;

        if (alunoId) {
            avaliacoesContainer.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        Avaliações do Aluno ${alunoId}
                    </div>
                    <div class="card-body">
                        <p>Ficha 1: Avaliação Física</p>
                        <p>Ficha 2: Progresso Acadêmico</p>
                        <p>Ficha 3: Comportamento</p>
                    </div>
                </div>
            `;
        } else {
            avaliacoesContainer.innerHTML = `<h5 class="text-muted text-center">Selecione um aluno para visualizar as avaliações</h5>`;
        }
    });
});

// Função de logout com modal de confirmação
document.getElementById('logoutButton').addEventListener('click', function () {
    var logoutModal = new bootstrap.Modal(document.getElementById('confirmLogoutModal'));
    logoutModal.show();
});

document.getElementById('confirmLogout').addEventListener('click', function () {
    window.location.href = '/logout';
});
