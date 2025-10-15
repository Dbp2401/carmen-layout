$(function () {
  // Slider usando slick
  $(".slider-track").slick({
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    infinite: true,
    //autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  });

  // Código del menú cerrado/inicial
  const $toggleMenuBtn = $("#toggleMenu");
  const $menu = $("#menu");

  $toggleMenuBtn.on("click", function () {
    $menu.toggleClass("cerrado");
  });

  gsap.registerPlugin(ScrollToPlugin);

  $("nav a").on("click", function (e) {
    e.preventDefault(); // evitar comportamiento por defecto
    const target = $(this).attr("href");

    // animación de scroll suave
    gsap.to(window, {
      duration: 1.5, // duración en segundos
      scrollTo: { y: target, offsetY: 80 }, // 80px de margen superior (por el header fijo)
      ease: "power2.inOut",
    });

    // cerrar menú en móvil
    $menu.addClass("cerrado");
  });

  $(function () {
  let lastScrollTop = 0;
  const $header = $("header");
  const $menu = $("#menu");
  const triggerHeight = 300;
  $header.addClass("show");

  $(window).on("scroll", function () {
    const currentScroll = $(this).scrollTop();

    if (currentScroll <= triggerHeight) {
      // Visible y transparente al principio
      $header.addClass("show").removeClass("scrolled");
    } 
    else if (currentScroll > lastScrollTop) {
      // Scroll hacia abajo → ocultar
      $header.removeClass("show");
      $menu.addClass("cerrado");
    } 
    else {
      // Scroll hacia arriba → mostrar con fondo negro
      $header.addClass("show scrolled");
    }

    lastScrollTop = currentScroll;
  });
});

});
