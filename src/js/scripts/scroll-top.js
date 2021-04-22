$(document).ready(function () {
  $(".catalog-js").on("click", function () {
    $("body").scrollTop(0);

    setTimeout(function () {
      $('.btn--catalog').trigger('click');
    }, 1000);
  });
  $(".search-js").on("click", function () {
    $("body").scrollTop(0);

    setTimeout(function () {
      $('input').focus();
    }, 1000);
  });
});