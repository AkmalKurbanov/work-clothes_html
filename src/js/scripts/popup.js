$(document).ready(function () {


  $('.close').on('click', function (e) {
    $('body').removeClass('dark-layout');
    $('.popup-window').fadeOut();
  });

  $('.call-back-js, .personal-cabinet, .quick-order, .reviews-js').on('click', function (e) {
    e.preventDefault()
    $('body').addClass('dark-layout');
  });

  $('.call-back-js').on('click', function (e) {
    e.preventDefault()
    $('.popup-window--callback').fadeIn();
  });
  
  $('.personal-cabinet').on('click', function (e) {
    e.preventDefault()
    $('.popup-window--login').fadeIn();
  });
  $('.quick-order').on('click', function (e) {
    e.preventDefault()
    $('.popup-window--quick-order').fadeIn();
  });
 
  $('.reviews-js').on('click', function (e) {
    e.preventDefault()
    $('.popup-window--review').fadeIn();
  });






});