$(function() {
  // Slider usando slick
 $('.slider-track').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 3,
  variableWidth: true,
  centerMode: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
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
