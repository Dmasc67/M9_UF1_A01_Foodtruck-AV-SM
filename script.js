document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const navbarText = document.querySelector(".navbar-text");
    const quienesSomosLink = document.querySelector('a[href="./quienesSomos.html"]');

    // Inicializar tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Función para actualizar la interfaz basada en el estado de sesión
    function actualizarEstadoSesion() {
        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            navbarText.textContent = `Benvenido ${usuarioGuardado}`;
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";
        } else {
            navbarText.textContent = "Comida sobre ruedas";
            loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
        }
    }

    // Verificar si hay un usuario guardado al cargar la página
    actualizarEstadoSesion();

    // Mostrar el modal de login al hacer clic en el botón de login
    loginBtn.addEventListener("click", function () {
        loginModal.show();
    });

    // Manejar el formulario de login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        if (username) {
            // Cambiar el texto de bienvenida en la navbar
            navbarText.textContent = `Benvingut ${username}`;

            // Ocultar el botón de login y mostrar logout
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";

            // Guardar el usuario en localStorage
            localStorage.setItem("usuario", username);

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

        // Eliminar el usuario de localStorage
        localStorage.removeItem("usuario");
    });

    // Función para actualizar la navbar
    function actualizarNavbar() {
        const username = localStorage.getItem("usuario");
        if (username) {
            navbarText.textContent = `Benvingut ${username}`;
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";
        } else {
            navbarText.textContent = "Comida sobre ruedas";
            loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
        }
    }

    // Inicializar la navbar al cargar la página
    actualizarNavbar();

    // Mantener el estado de sesión cuando se haga clic en "Quien somos"
    quienesSomosLink.addEventListener("click", function (event) {
        // Verificamos si el usuario está logueado
        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            // Si está logueado, se mantiene el nombre
            navbarText.textContent = `Benvingut ${usuarioGuardado}`;
        } else {
            // Si no está logueado, dejamos el texto predeterminado
            navbarText.textContent = "Comida sobre ruedas";
        }
    });
});
