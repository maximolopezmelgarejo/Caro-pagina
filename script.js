document.getElementById('name').addEventListener('input', function() {
    const nameInput = this;
    const nameValue = nameInput.value;

    // Expresión regular para verificar si hay números en el nombre
    const containsNumber = /\d/;

    if (containsNumber.test(nameValue)) {
        // Si contiene números, se pone el fondo rojo
        nameInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
    } else {
        // Si no contiene números, se restaura el fondo
        nameInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
    }
});


document.getElementById('tel').addEventListener('input', function() {
    const telInput = this;
    const telValue = telInput.value;

    // Expresión regular que permite números, espacios, guiones y el símbolo +
    const validPattern = /^[\d\s\-+]*$/;

    if (!validPattern.test(telValue)) {
        // Si el valor no coincide con el patrón permitido, se pone el fondo en rojo suave
        telInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
    } else {
        // Si el valor es válido, se pone el fondo en verde claro
        telInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
    }
});


document.getElementById('email').addEventListener('input', function() {
    const emailInput = this;
    const emailValue = emailInput.value;

    // Expresión regular para validar un formato básico de email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
        // Si el email no es válido, se pone el fondo en rojo suave
        emailInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
    } else {
        // Si el email es válido, se pone el fondo en verde claro
        emailInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
    }
});



document.getElementById('pais').addEventListener('input', function() {
    const nameInput = this;
    const nameValue = nameInput.value;

    // Expresión regular para verificar si hay números en el nombre
    const containsNumber = /\d/;

    if (containsNumber.test(nameValue)) {
        // Si contiene números, se pone el fondo rojo
        nameInput.style.backgroundColor = 'rgba(248, 215, 218, 1)';
    } else {
        // Si no contiene números, se restaura el fondo
        nameInput.style.backgroundColor = 'rgba(212, 237, 218, 1)';
    }
});

