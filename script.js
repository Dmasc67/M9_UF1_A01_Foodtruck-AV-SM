document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const navbarText = document.querySelector(".navbar-text");

    // Inicializar tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Mostrar el modal al hacer clic en el botón de login
    loginBtn.addEventListener("click", function () {
        loginModal.show();
    });

    // Manejar el formulario de login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const username = usernameInput.value.trim();

        if (username) {
            // Cambiar el texto de bienvenida en la navbar
            navbarText.textContent = `Benvingut ${username}`;

            // Ocultar el botón de login y mostrar logout
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";

            // Cerrar el modal
            loginModal.hide();
        }
    });

    // Manejar el logout
    logoutBtn.addEventListener("click", function () {
        // Restaurar el texto de la navbar
        navbarText.textContent = "Comida sobre ruedas";

        // Restaurar los botones
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    });

    // Ocultar el botón de logout al inicio
    logoutBtn.style.display = "none";
});
