const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: 'horizontal', 
  slidesPerView: 1,
  autoplay: {
    delay: 2800,
  }
});
