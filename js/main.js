document.addEventListener('DOMContentLoaded', () => {
    
    // --- menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Cerrar menu par que funcione en teleonos
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // --- validacino ---
    const formulario = document.getElementById('reserva-form');
    const mensajeExito = document.getElementById('mensaje-exito');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            let valid = true;

            // Captura de inputs
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const tipo = document.getElementById('tipo');

            // Limpiar errores previos
            document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');

            if (nombre.value.trim() === '') {
                mostrarError(nombre, 'El nombre es obligatorio.');
                valid = false;
            } else if (nombre.value.trim().length < 3) {
                mostrarError(nombre, 'El nombre debe tener al menos 3 caracteres.');
                valid = false;
            }

            // validar email con regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                mostrarError(email, 'El correo electrónico es obligatorio.');
                valid = false;
            } else if (!emailRegex.test(email.value)) {
                mostrarError(email, 'Por favor, introduce un correo válido.');
                valid = false;
            }

            // validar seleccion
            if (tipo.value === '') {
                mostrarError(tipo, 'Debes seleccionar un tipo de alojamiento.');
                valid = false;
            }

            // Si pasa todas las validaciones
            if (valid) {
                formulario.reset();
                formulario.classList.add('hidden');
                mensajeExito.classList.remove('hidden');
            }
        });
    }

    // para mostrar errores abajo de los campos
    function mostrarError(inputElement, mensaje) {
        const grupo = inputElement.parentElement;
        const errorSpan = grupo.querySelector('.error-msg');
        if (errorSpan) {
            errorSpan.textContent = mensaje;
        }
    }
});