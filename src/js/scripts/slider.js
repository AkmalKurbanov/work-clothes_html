$(document).ready(function () {

  var swiper = new Swiper('.main-slider', {
    loop: true,
    // effect: 'fade',
    autoplay: {
      delay: 3000,
    },
    navigation: {
      prevEl: '.main-slider-btn-left',
      nextEl: '.main-slider-btn-right',
    },

  });

  var swiper = new Swiper('.popular-slider', {
    loop: true,
    speed: 3000,
    // autoplay: {
    //   delay: 3000,
    // },
    navigation: {
      nextEl: '.popular-slider-btn-left',
      prevEl: '.popular-slider-btn-right',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
      }
    }
  });

});