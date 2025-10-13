$(function() {
  // Slider usando slick
 $('.slider-track').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 1,
  arrows: false,      // opcional, puedes activarlos si quieres flechas
  dots: true,         // puntos abajo como en tu imagen
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '20px'
      }
    }
  ]
});

  // Código del menú cerrado/inicial
  const $toggleMenuBtn = $('#toggleMenu');
  const $menu = $('#menu');

  $toggleMenuBtn.on('click', function() {
    $menu.toggleClass('cerrado');
  });
});
