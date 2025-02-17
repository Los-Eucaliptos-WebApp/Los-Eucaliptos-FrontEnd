document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user => user.username === loginUsername
    && user.password === loginPassword);

    if (usuarioEncontrado) {
        alert(`¡Bienvenido, ${loginUsername}!`);
        console.log(usuarioEncontrado);
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    document.getElementById("loginForm").reset();
});
