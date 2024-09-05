function validateName() {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const containsNumber = /\d/;
    if (containsNumber.test(nameValue)) {
        nameInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
        return false;
    } else {
        nameInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
        emailInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
        return false;
    } else {
        emailInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
        return true;
    }
}

function validateTel() {
    const telInput = document.getElementById('tel');
    const telValue = telInput.value;
    const validTelPattern = /^[\d\s\-+]*$/; // Acepta solo números, espacios, guiones y +
    if (!validTelPattern.test(telValue)) {
        telInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
        return false;
    } else {
        telInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
        return true;
    }
}

function validatePais() {
    const paisInput = document.getElementById('pais');
    const paisValue = paisInput.value;
    const containsNumber = /\d/;
    if (containsNumber.test(paisValue)) {
        paisInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
        return false;
    } else {
        paisInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
        return true;
    }
}

document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('tel').addEventListener('input', validateTel);
document.getElementById('pais').addEventListener('input', validatePais);

document.getElementById('formulario').addEventListener('submit', function(event) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isTelValid = validateTel();
    const isPaisValid = validatePais();

    // Si algún campo no es válido, previene el envío
    if (!(isNameValid && isEmailValid && isTelValid && isPaisValid)) {
        event.preventDefault();
        alert('Por favor, revise los datos en el formulario.');
    }
});
//------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const formElement = document.querySelector('.contacto');

    // Configuramos el IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                formElement.classList.add('show'); // Agrega la clase 'show' solo cuando el formulario esté en vista
                observer.unobserve(formElement); // Deja de observar el formulario después de la primera vez
            }
        });
    }, { threshold: 0.1 }); // El 20% del formulario debe estar visible para activar la animación

    observer.observe(formElement); // Comenzamos a observar el formulario
});