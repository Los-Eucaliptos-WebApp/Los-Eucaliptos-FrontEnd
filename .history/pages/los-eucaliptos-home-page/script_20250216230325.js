let currentIndex = 0;  // Índice de la imagen actual

// Función para mover las imágenes
function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel-image');
    
    // Eliminar la clase 'active' de la imagen actual
    images[currentIndex].classList.remove('active');
    
    // Calcular el índice de la siguiente imagen
    currentIndex += direction;
    
    // Si llegamos al final, volver al inicio o si estamos al principio, ir al final
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    // Agregar la clase 'active' a la nueva imagen
    images[currentIndex].classList.add('active');
}

// Inicializar el carrusel para que se muestre la primera imagen al cargar
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    images[currentIndex].classList.add('active');  // Mostrar la primera imagen
});
