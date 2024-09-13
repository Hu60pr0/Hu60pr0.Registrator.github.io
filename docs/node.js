document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name').value;
    const passwordInput = document.getElementById('password').value;

    if (nameInput === 'Hugo' && passwordInput === '123456') {
        document.getElementById('message').textContent = 'Registro exitoso';
        document.getElementById('message').style.color = 'green';

        // Redirigir después de 2 segundos (2000 milisegundos)
        setTimeout(function () {
            window.location.href = 'https://hu60pr0.github.io/';
        }, 2000);

    } else {
        document.getElementById('message').textContent = 'Nombre o contraseña incorrectos';
        document.getElementById('message').style.color = 'red';
    }
});

// Mostrar/ocultar contraseña
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Cambiar el texto del botón dependiendo del estado
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});
