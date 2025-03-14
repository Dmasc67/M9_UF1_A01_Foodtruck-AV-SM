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
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            loginModal.show();
        });
    }

    // Manejar el formulario de login
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = usernameInput.value.trim();
            if (username) {
                localStorage.setItem("username", username);
                actualizarNavbar();
                loginModal.hide();
            }
        });
    }

    // Manejar el logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("username");
            actualizarNavbar();
            window.location.href = '/DAW/M09/UF1/M9_UF1_A01_Foodtruck-AV-MC-SM/index.html';
        });
    }

    // Función para actualizar la navbar
    function actualizarNavbar() {
        const username = localStorage.getItem("username");
        if (username) {
            navbarText.textContent = `Bienvenido, ${username}`;
            if (loginBtn) loginBtn.style.display = "none";
            logoutBtn.style.display = "block";
        } else {
            navbarText.textContent = "Comida sobre ruedas";
            if (loginBtn) loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
        }
    }

    // Inicializar la navbar al cargar la página
    actualizarNavbar();
});
