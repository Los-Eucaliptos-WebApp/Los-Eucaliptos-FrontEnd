document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some(user => user.username === username)) {
        alert("El usuario ya existe.");
        return;
    }

    usuarios.push({
        nombre: nombre,
        correo: correo,
        celular: celular,
        username: username,
        password: password
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("¡Usuario registrado exitosamente!");
    document.getElementById("registroForm").reset();
});
