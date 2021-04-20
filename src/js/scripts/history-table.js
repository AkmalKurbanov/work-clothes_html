$(document).ready(function () {
  $('.history-btn').on('click', function () {
    $(this).parent().parent().next().children('.order-list').toggleClass('--open');
  });
});