document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.slider-track');
  const prev = document.querySelector('.slider-prev');
  const next = document.querySelector('.slider-next');
  const totalSlides = document.querySelectorAll('.slider-track .card').length;
  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlide();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
  });
});
