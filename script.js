
document.addEventListener("DOMContentLoaded", function() {
  let boton = document.getElementById("boton");
  let texto = document.getElementById("texto");
  let titulo = document.getElementById("titulo");

  boton.addEventListener("click", function() {
      let colores = ["white", "#00aaff", "#ffd700"]; // Blanco, azul, dorado
      let colorRandom = colores[Math.floor(Math.random() * colores.length)];

      texto.style.color = colorRandom; // Cambia el color del texto
      titulo.style.color = colorRandom; // Cambia el color del título
  });
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
