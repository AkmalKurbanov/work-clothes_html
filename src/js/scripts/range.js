$(document).ready(function () {
  // $(function () {
  //   $("#slider-range").slider({
  //     range: true,
  //     min: 0,
  //     max: 1000000,
  //     values: [0, 1000000],
  //     slide: function (event, ui) {
  //       $("#amount_min").val(ui.values[0]);
  //       $("#amount_max").val(ui.values[1]);
  //     }
  //   });
  //   $("#amount_min").val($("#slider-range").slider("values", 0));
  //   $("#amount_max").val($("#slider-range").slider("values", 1));
  //   $("#amount_min").change(function () {
  //     $("#slider-range").slider("values", 0, $(this).val());
  //   });
  //   $("#amount_max").change(function () {
  //     $("#slider-range").slider("values", 1, $(this).val());
  //   })
  // });

  // $(function () {
  //   $("#slider-range-mob").slider({
  //     range: true,
  //     min: 0,
  //     max: 1000000,
  //     values: [0, 1000000],
  //     slide: function (event, ui) {
  //       $("#amount_min-mob").val(ui.values[0]);
  //       $("#amount_max-mob").val(ui.values[1]);
  //     }
  //   });
  //   $("#amount_min-mob").val($("#slider-range-mob").slider("values", 0));
  //   $("#amount_max-mob").val($("#slider-range-mob").slider("values", 1));
  //   $("#amount_min-mob").change(function () {
  //     $("#slider-range-mob").slider("values", 0, $(this).val());
  //   });
  //   $("#amount_max-mob").change(function () {
  //     $("#slider-range-mob").slider("values", 1, $(this).val());
  //   })
  // });



  var listHeight = $(".catalog-page__filter-check--cloth").height();
  var listHeightWin = 185;

  if (listHeight >= listHeightWin) {
    $('.catalog-page__filter-check--cloth').css({
      'height': listHeightWin,
      'overflow-y': 'scroll'
    });
  }





  $('.catalog-page__filter-mobile-trigger').on('click', function () {
    $('.mobile-filter').addClass('--open');
    $('body').addClass('scroll-disabled');
  });
  $('.close').on('click', function () {
    $('.mobile-filter').removeClass('--open');
    $('body').removeClass('scroll-disabled');
  });

});