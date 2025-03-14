document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const navbarText = document.querySelector(".navbar-text");

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
        event.preventDefault(); // Evita el envío del formulario

        const username = usernameInput.value.trim();

        if (username) {
            localStorage.setItem("usuario", username); // Guardar el usuario en localStorage
            actualizarEstadoSesion(); // Actualizar la interfaz
            loginModal.hide(); // Cerrar el modal
        }
    });

    // Manejar el logout
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("usuario"); // Eliminar usuario guardado
        actualizarEstadoSesion(); // Restaurar la interfaz
    });
});
