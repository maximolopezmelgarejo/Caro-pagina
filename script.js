// Mostrar/Ocultar la barra de navegación según la posición del mouse
document.addEventListener('mousemove', function (e) {
    const nav = document.querySelector('nav');
    if (e.clientY < 50) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
});

// Mostrar campo "Especifica tu país" cuando seleccionen "Otro"
const paisSelect = document.getElementById('pais');
const otroPaisInput = document.getElementById('otroPais');

paisSelect.addEventListener('change', function () {
    if (this.value === 'Otro') {
        otroPaisInput.style.display = 'block';
        otroPaisInput.setAttribute('required', 'true');
    } else {
        otroPaisInput.style.display = 'none';
        otroPaisInput.removeAttribute('required');
    }
});

// Formulario de contacto
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario
    const loader = document.getElementById('loader');
    const successMessage = document.getElementById('success-message');
    loader.style.display = 'block';

    // Simular una llamada al servidor
    setTimeout(() => {
        loader.style.display = 'none';
        successMessage.style.display = 'block';
        // Resetear el formulario después de enviar
        document.getElementById('formulario').reset();
        // Ocultar el mensaje de éxito después de unos segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }, 2000);
});
