// Esperar a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del DOM
    let loginForm = document.querySelector('.login-form-container');
    let loginBtn = document.querySelector('#login-btn');
    let navbar = document.querySelector('.header .navbar');
    let menuBtn = document.querySelector('#menu-btn');

    console.log(loginForm);
    console.log(loginBtn);
    console.log(navbar);
    console.log(menuBtn);

    // Verificar si los elementos existen antes de agregar los eventos
    if (loginForm && loginBtn && navbar && menuBtn) {
        loginBtn.onclick = () => {
            loginForm.classList.toggle('active');
            navbar.classList.remove('active');
        };

        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            loginForm.classList.remove('active');
        };

        window.onscroll = () => {
            navbar.classList.remove('active');
        };
    }
});
