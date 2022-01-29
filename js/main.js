var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


$('.burger').click(function () {
    $('.menu').toggle(500);
});

$('.header_adress-text').click(function () {
  $('.map').toggle(500);
});