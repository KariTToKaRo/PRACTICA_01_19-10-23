document.querySelectorAll('.toggle-button').forEach(function(toggleButton) {
  var button = toggleButton.querySelector('button');
  var collapse = new bootstrap.Collapse(button.nextElementSibling.nextElementSibling);

  button.addEventListener('click', function() {
    button.textContent = collapse._isShown ? '-' : '+';
  });
});

const galeriaRecomendados = document.querySelector('.galeriaRecomendados');

function desplazarCarrusel(direccion) {
  const anchoProducto = document.querySelector('.producto_recomendados_relacionados1').offsetWidth;
  const desplazamiento = direccion === 'derecha' ? -anchoProducto : anchoProducto;

  galeriaRecomendados.style.transform = `translateX(${desplazamiento}px)`;
}

