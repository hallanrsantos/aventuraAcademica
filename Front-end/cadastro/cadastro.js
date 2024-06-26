document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastro-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome-id').value;
        const email = document.getElementById('email-id').value;
        const senha = document.getElementById('senha-id').value;

        const userData = {
            nome: nome,
            email: email,
            senha: senha,
        };

        // URL da API de cadastro
        const apiUrl = 'http://localhost:3000';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Redirecionar para a página de login ou mostrar uma mensagem de sucesso
            window.location.href = "../entrar/entrar.html";
        })
        .catch(error => {
            console.error('Error:', error);
            // Mostrar uma mensagem de erro ao usuário
        });
    });
});
