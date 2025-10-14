$(function() {
  // Slider usando slick
 $('.slider-track').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 1,
  variableWidth: true,
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
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
