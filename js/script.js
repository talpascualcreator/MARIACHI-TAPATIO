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
  