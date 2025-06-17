document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const btnGoogleLogin = document.querySelector('.btn-outline-secondary');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const registerLink = document.querySelector('.register-link');

    // Função para simular o login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Validação
        if (username.trim() === '' || password.trim() === '') {
            console.log('Erro: Por favor, preencha o usuário e a senha.');
            alert('Por favor, preencha o usuário e a senha.');
            return;
        }
        console.log('Tentativa de Login:', { username, password });
        alert('Login simulado. Em um site real, esta ação enviaria dados para o servidor.');
    });
 
    //Login com Google
    btnGoogleLogin.addEventListener('click', () => {
        alert('Redirecionando para Login com Google (simulado)...');
    });

    //Redefinir Senha
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecionando para a página de redefinição de senha (simulado)...');
    });

    //Cadastre-se aqui!
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecionando para a página de cadastro (simulado)...');
    });
});
