/* botones de mas info*/

function toggleContent() {
    var toggleBtn = document.getElementById("toggleBtn");
    var hiddenContent = document.getElementById("hiddenContent");

    if (toggleBtn.innerHTML === '+') {
      toggleBtn.innerHTML = '-';
      hiddenContent.style.display = "block";
    } else {
      toggleBtn.innerHTML = '+';
      hiddenContent.style.display = "none";
    }
  }


/*Carrusel you may also like*/

const galeriaRecomendados = document.querySelector('.galeriaRecomendados');

function desplazarCarrusel(direccion) {
  const anchoProducto = document.querySelector('.producto_recomendados_relacionados1').offsetWidth;
  const desplazamiento = direccion === 'derecha' ? -anchoProducto : anchoProducto;

  galeriaRecomendados.style.transform = `translateX(${desplazamiento}px)`;
}