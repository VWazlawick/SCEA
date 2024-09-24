document.getElementById('btEntrar').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Simulação de login - aqui você pode integrar com um backend ou realizar a validação de login
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Validação simples
        if (email === "admin@exemplo.com" && senha === "123456") {
            alert("Login bem-sucedido");
            // Redirecionar para o painel principal, por exemplo
            window.location.href = "dashboard.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    }
});
