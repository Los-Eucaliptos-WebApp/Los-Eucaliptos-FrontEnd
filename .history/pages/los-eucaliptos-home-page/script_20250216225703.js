let currentSlide = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const totalSlides = images.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(${-currentSlide * 100}%)`;
}