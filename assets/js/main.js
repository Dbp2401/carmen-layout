$(function () {
  // Slider usando slick
  $(".slider-track").slick({
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    infinite: true,
    autoplay: false,
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

  gsap.to(".flecha:nth-child(1)", {
    y: 0,
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut",
  });

  gsap.to(".flecha:nth-child(2)", {
    y: -22.5,
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut",
  });

  gsap.to(".flecha:nth-child(3)", {
    y: -45,
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut",
  });

  gsap.to(".flecha:nth-child(4)", {
    y: -67.5,
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut",
  });

  const $menuLateral = $("#menuLateral");
  const $toggleMenuBtn = $("#toggleMenu");

  $(function () {
    let lastScrollTop = 0;
    const $header = $("header");
    const triggerHeight = 300;

    $header.addClass("show"); // visible al inicio sin fondo

    $(window).on("scroll", function () {
      const currentScroll = $(this).scrollTop();

      if (currentScroll <= triggerHeight) {
        // Al principio: barra visible, fondo transparente
        $header.addClass("show").removeClass("scrolled");
      } else if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo: ocultar barra y cerrar menú
        $header.removeClass("show");
        if ($menuLateral.hasClass("abierto")) {
          gsap.to($menuLateral, { right: "-300px", duration: 0.5 });
          $menuLateral.removeClass("abierto");
        }
      } else {
        // Scroll hacia arriba: mostrar barra con fondo negro
        $header.addClass("show scrolled");
      }

      lastScrollTop = currentScroll;
    });

    // Menú toggle con animación GSAP
    $toggleMenuBtn.on("click", function () {
      if ($menuLateral.hasClass("abierto")) {
        gsap.to($menuLateral, {
          right: "-300px",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => $menuLateral.removeClass("abierto"),
        });
      } else {
        $menuLateral.addClass("abierto");
        gsap.to($menuLateral, {
          right: "0px",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    });
  });

  // Cerrar menú al hacer clic fuera
  $(document).on("click", function (event) {
    if (
      $menuLateral.hasClass("abierto") &&
      !$menuLateral.is(event.target) &&
      $menuLateral.has(event.target).length === 0 &&
      !$toggleMenuBtn.is(event.target)
    ) {
      gsap.to($menuLateral, {
        right: "-300px",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => $menuLateral.removeClass("abierto"),
      });
    }
  });

  $("#btnCerrarMenu").on("click", function () {
    gsap.to("#menuLateral", {
      right: "-300px",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => $("#menuLateral").removeClass("abierto"),
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  const desplazamientosY = [
    -50, // card izquierda va hacia arriba 50px
    150, // card del medio va hacia abajo 150px
    70, // card derecha va hacia abajo 70px
  ];

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    const desplazamientosY = [-50, 150, 70];

    gsap.utils.toArray(".card").forEach((card, index) => {
      const yOffset = desplazamientosY[index] || 0;

      // Estado inicial alineado
      gsap.set(card, { y: 0 });

      // Crear ScrollTrigger para controlar animación
      ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        onEnter: () => {
          gsap.to(card, { y: yOffset, duration: 0.5, ease: "power1.out" });
        },
        onLeaveBack: () => {
          gsap.to(card, { y: 0, duration: 0.5, ease: "power1.in" });
        },
      });
    });

    // Retornar función para limpiar animaciones si cambia resolución
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.utils.toArray(".card").forEach((card) => gsap.set(card, { y: 0 }));
    };
  });
});
