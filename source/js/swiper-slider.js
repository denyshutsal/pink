// Slider (reviews.scss block). https://swiperjs.com/
$(function () {
  (function () {
    // eslint-disable-next-line
    var mySwiper = new Swiper('.swiper-container', {
      autoHeight: true,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      }
    });
  })();
});
