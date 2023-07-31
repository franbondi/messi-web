function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "flex" : "none";
}
const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})


function startCarousel() {
    // Verificar si el carrusel no se está reproduciendo actualmente
    if (!$('#myCarousel').hasClass('carousel')) {
      $('#myCarousel').carousel('cycle'); // Iniciar el carrusel
    }
  }

  