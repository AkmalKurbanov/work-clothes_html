$(document).ready(function () {

  $('.header-mobile__nav-icon--menu').parent().on('click', function () {
    $('.mobile-menu').addClass('--open');
    $('body').addClass('scroll-disabled');
  });

  $('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').removeClass('--open');
    $('body').removeClass('scroll-disabled');
  });

  $(window).scroll(function () {
    let heightMobileHeader = $('.header-mobile__nav-wrap').height();
    if ($(this).scrollTop() >= heightMobileHeader) {
      $('.fixed-menu').addClass("sticky");
    } else {
      $('.fixed-menu').removeClass("sticky");
    }
  });


});