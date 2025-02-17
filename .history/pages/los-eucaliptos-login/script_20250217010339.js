// Función para iniciar sesión con más campos
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los datos del formulario de inicio de sesión
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Obtener los usuarios desde localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario y la contraseña son correctos
    const usuarioEncontrado = usuarios.find(user => user.username === loginUsername && user.password === loginPassword);

    if (usuarioEncontrado) {
        alert(`¡Bienvenido, ${loginUsername}!`);
        console.log(usuarioEncontrado);  // Aquí puedes ver los demás datos (nombre, correo, celular)
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    document.getElementById("loginForm").reset();
});
