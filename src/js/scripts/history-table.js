$(document).ready(function () {
  $('.history-btn').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().next().next().children('.order-list').toggleClass('--open');
    $(this).parent().parent().next().children('.order-list').toggleClass('--open');
  });
});