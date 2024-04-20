document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icono').addEventListener('click', function() {
        document.querySelector('.menu-items').classList.toggle('menu-abrir');
    });
});

  
  // Variables para el carrusel de imágenes
  let index = 0;
  const imagenes = document.querySelectorAll('.imagen');
  const totalImagenes = imagenes.length;
  
  // Función para mostrar la siguiente imagen en el carrusel
  function siguienteImagen() {
    imagenes[index].style.opacity = 0;
    index = (index + 1) % totalImagenes;
    imagenes[index].style.opacity = 1;
  }
  
  // Función para mostrar la imagen anterior en el carrusel
  function imagenAnterior() {
    imagenes[index].style.opacity = 0;
    index = (index - 1 + totalImagenes) % totalImagenes;
    imagenes[index].style.opacity = 1;
  }
  
  // Intervalo para cambiar automáticamente las imágenes cada 5 segundos
  setInterval(siguienteImagen, 5000);
  
  // Eventos para cambiar las imágenes al hacer clic en las flechas
  document.querySelector('.flecha-izquierda').addEventListener('click', imagenAnterior);
  document.querySelector('.flecha-derecha').addEventListener('click', siguienteImagen);

  // Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Función para activar los fuegos artificiales
  function activarFuegosArtificiales() {
    fireworks.create({
      count: 3, // Cantidad de fuegos artificiales
      colors: ["#ff0000", "#00ff00", "#0000ff"], // Colores de los fuegos artificiales
      backgroundColor: "transparent" // Fondo transparente para que se superpongan sobre el contenido
    }).play();
  }

  // Detecta cuando la animación del texto alcanza el punto deseado
  var texto = document.querySelector(".logo-texto");
  texto.addEventListener("animationiteration", function() {
    activarFuegosArtificiales();
  });
});

// carrusel clase de guitarra

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide1");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// carrusel clase de tecnica vocal

let slideIndex2 = 1;
showSlides2(slideIndex2);

function moveSlide2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    const slides = document.getElementsByClassName("slide2");
    const dots = document.getElementsByClassName("dot2");

    if (n > slides.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}
 // cambiar automaticamente el año
  

var yearSpan = document.getElementById('year');

// Obtiene el año actual
var currentYear = new Date().getFullYear();

// Asigna el año actual al contenido del span
yearSpan.textContent = currentYear;