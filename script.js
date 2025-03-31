document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;

  if (slides) {
      setInterval(() => {
          currentIndex = (currentIndex + 1) % totalSlides;
          slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 5000); // Cambia de imagen cada 5 segundos
  }
});



let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000); // Cambia de imagen cada 5 segundos

// Este script actualiza el año automáticamente en el footer.
document.getElementById("year").textContent = new Date().getFullYear();

