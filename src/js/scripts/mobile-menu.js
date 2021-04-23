$(document).ready(function () {

  $('.header-mobile__nav-icon--menu').parent().on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').addClass('--open');
    $('body').addClass('scroll-disabled');
  });

  $('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').removeClass('--open');
    $('body').removeClass('scroll-disabled');
  });




});