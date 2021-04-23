$(document).ready(function () {
  $('.btn--catalog').on('click', function () {
    $(this).toggleClass('open');
    $('.catalog').toggleClass('catalog--open');
  });

  $('.catalog__close').on('click', function () {
    $('.btn--catalog').removeClass('open');
    $('.catalog').removeClass('catalog--open');
  });
});