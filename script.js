
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
